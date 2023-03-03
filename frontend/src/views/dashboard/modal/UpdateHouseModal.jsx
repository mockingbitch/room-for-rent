import React, { useState, useCallback } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import { UpdateHouseService } from '../../../services/HouseService';

const UpdateHouseModal = (props) => {
    const {item} = props;
    const {t} = useTranslation();
    const [data, setData] = useState([]);
    const token = useSelector(state => state.auth.user.access_token);

    const handleOnChange = useCallback(event => {
        const { name, value } = event.target;
        setData({ ...data, [name] : value });
        console.log(data);
    });

    const handleUpdate = async () => {
        try {
            let res = await UpdateHouseService(data, token, item.id);
            if (res && res.data.error === 0) {
                swal({
                    title: "Updated!",
                    text: "Update house successfully!",
                    icon: "success",
                    button: "OK!",
                });
                props.refresh();
                setData();
                props.onHide();
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
                    <Modal.Title>{t('house.update')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-content">
                    <div id="create-form" className=" mb-4">
                            <div className="row">
                                <div className="form-group mt-4 col-6">
                                    <TextField id="outlined-basic" label={t('common.name_vi')} name="name_vi" style={{width: '100%'}} variant="outlined" defaultValue={item.name_vi} onChange={handleOnChange} />
                                </div>
                                <div className="form-group mt-4 col-6">
                                    <TextField id="outlined-basic" label={t('common.name_en')} name="name_en" style={{width: '100%'}} variant="outlined" defaultValue={item.name_en} onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group mt-4 col-12">
                                    <TextField id="outlined-basic" label={t('common.description_vi')} name="description_vi" style={{width: '100%'}} variant="outlined" defaultValue={item.description_vi} onChange={handleOnChange} />
                                </div>
                                <div className="form-group mt-4 col-12">
                                    <TextField id="outlined-basic" label={t('common.description_en')} name="description_en" style={{width: '100%'}} variant="outlined" defaultValue={item.description_en} onChange={handleOnChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateHouseModal