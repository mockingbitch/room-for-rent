import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const UpdateCategoryModal = (props) => {
    const {item} = props;
    const {t} = useTranslation();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal {...props}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('category.update')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body-content">
                        <div id="create-form" className=" mb-4">
                        <div className="row">
                            <div className="form-group mt-4 col-6">
                            <TextField id="outlined-basic" label={t('common.name_vi')} name="name_vi" style={{width: '100%'}} variant="outlined" value={item.name_vi}/>
                            </div>
                            <div className="form-group mt-4 col-6">
                            <TextField id="outlined-basic" label={t('common.name_en')} name="name_en" style={{width: '100%'}} variant="outlined" value={item.name_en}/>
                            </div>
                        </div>
                        <div className="form-group mt-4">
                            <TextField
                                id="outlined-select-currency"
                                name="status"
                                select
                                label="Select Status"
                                // value={status}
                                helperText="Please select status"
                                style={{width: '100%'}}
                                // onChange={handleOnChange}
                                >
                                <MenuItem >
                                    Tét
                                </MenuItem>
                            </TextField>
                        </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={props.onHide}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default UpdateCategoryModal