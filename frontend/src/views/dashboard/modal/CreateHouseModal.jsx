import React, { useState, useCallback, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import { CreateHouseService } from '../../../services/HouseService';
import { GetCategoryService } from '../../../services/CategoryService';
import { GetTagService } from '../../../services/TagService';
import { GetDistrictService } from '../../../services/AddressService';
import AutoCompleteCity from '../../../components/Select/AutoCompleteCity';
import MultipleSelect from '../../../components/Select/MultipleSelect';

const CreateHouseModal = (props) => {
    const {t, i18n} = useTranslation();
    const [data, setData] = useState({
        name: '',
        description: '',
        category_id: '',
        tag_id: [],
        ward_id: {},
        city_id: {},
    });
    const token = useSelector(state => state.auth.user.access_token);
    const [categories, setCategories] = useState([]);
    const [message, setMessage] = useState();
    const [tags, setTags] = useState([]);
    const [cities, setCities] = useState();
    const [districts, setDistricts] = useState();
    const [wards, setWards] = useState();

    useEffect(() => {
        getCategories();
        getTags();
    }, []);

    const getCategories = async () => {
        try {
            let res = await GetCategoryService()
            if (res.error === 0) {
                setCategories(res.categories);
            }
        } catch (error) {
            setMessage('API Error: ' + error.message)
            console.log(message);
        }
    }

    const getTags = async () => {
        try {
            let res = await GetTagService()
            if (res.error === 0) {
                setTags(res.tags);
            }
        } catch (error) {
            setMessage('API Error: ' + error.message)
            console.log(message);
        }
    }

    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setData({ ...data, [name] : value });
        console.log(data);
    });

    const handleCreate = async () => {
        try {
            let res = await CreateHouseService(data, token);
            if (res && res.data.error === 0) {
                swal({
                    title: "Created!",
                    text: "Created house successfully!",
                    icon: "success",
                    button: "OK!",
                });
                props.refresh();
                setData('');
            } else {
                swal({
                    title: "Failed!",
                    text: "Something went wrong!",
                    icon: "warning",
                    button: "Ah shiet!",
                });
            }
        } catch (error) {
            console.log(error);
            swal({
                title: "Failed!",
                text: "Something went wrong!",
                icon: "warning",
                button: "Ah shiet!",
            });
        }
    }

    const selectOnChange = (item) => {
        setData({...data, tag_id: item})
    }

    const autoCompleteOnChangeCity = async (item) => {
        setData({...data, city_id: item})
        try {
            let res = await GetDistrictService(item.id)
            if (res && res.error === 0) {
                setDistricts(res.district);
            } else {
                swal({
                    title: "Failed!",
                    text: "Something went wrong!",
                    icon: "warning",
                    button: "Ah shiet!",
                });
            }
        } catch (error) {

        }
    }

    return (
        <>
            <Modal {...props} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{t('house.create')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-content">
                        <div id="create-form" className=" mb-4">
                            <div className="row">
                                <div className="form-group mt-4 col-6">
                                    <TextField id="outlined-basic" label={t('common.name')} name="name" style={{width: '100%'}} variant="outlined" onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-4 col-12">
                                    <TextField id="outlined-basic" label={t('common.description')} name="description" style={{width: '100%'}} variant="outlined" onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-4 col-12">
                                    <TextField
                                        value={data.category_id}
                                        onChange={handleOnChange}
                                        name='category_id'
                                        select // tell TextField to render select
                                        label={t('category.name')}
                                        fullWidth
                                    >
                                        {categories && categories.map(item => {
                                            return (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {i18n.language === 'vi' ? item.name_vi : item.name_en}
                                                </MenuItem>
                                            )
                                        })}
                                    </TextField>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-4 col-4">
                                    <AutoCompleteCity options={tags} passData={autoCompleteOnChangeCity} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-4 col-12">
                                    {/* <MultiSelect arrObj={categories} handleOnChange={handleOnChangeMultiSelect} /> */}
                                    <MultipleSelect options={tags} onChangeSelect={selectOnChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        {t('common.close')}
                    </Button>
                    <Button variant="primary" onClick={handleCreate}>
                        {t('common.save')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreateHouseModal