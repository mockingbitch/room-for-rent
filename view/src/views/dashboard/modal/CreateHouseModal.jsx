import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import { CreateHouseService } from '../../../services/HouseService';

const CreateHouseModal = (props) => {
    const {t} = useTranslation();
    const [data, setData] = useState();
    const token = useSelector(state => state.auth.user.access_token);

    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setData({ ...data, [name] : value });
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

    return (
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('house.create')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-content">
                        <div id="create-form" className=" mb-4">
                            <div className="row">
                                <div className="form-group mt-4 col-6">
                                    <TextField id="outlined-basic" label={t('common.name_vi')} name="name_vi" style={{width: '100%'}} variant="outlined" onChange={handleOnChange} />
                                </div>
                                <div className="form-group mt-4 col-6">
                                    <TextField id="outlined-basic" label={t('common.name_en')} name="name_en" style={{width: '100%'}} variant="outlined" onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-4 col-12">
                                    <TextField id="outlined-basic" label={t('common.description_vi')} name="description_vi" style={{width: '100%'}} variant="outlined" onChange={handleOnChange} />
                                </div>
                                <div className="form-group mt-4 col-12">
                                    <TextField id="outlined-basic" label={t('common.description_en')} name="description_en" style={{width: '100%'}} variant="outlined" onChange={handleOnChange} />
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