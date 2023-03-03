import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CreateCategoryModal from './modal/CreateCategoryModal';

const Test = () => {
    const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
    const toggleModal = () => {
        setIsOpenModalCreate(false);
    }

    const handleCreate = () => {
    setIsOpenModalCreate(true);
    }
    return (
        <><button onClick={handleCreate}> +</button>
            {isOpenModalCreate && (
                <CreateCategoryModal
                isOpen={isOpenModalCreate}
                toggle={toggleModal}
                />
            )}
        </>
    );
}

export default Test