import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReview from './EditReview';

function EditReviewModal({ selectedReview }) {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='editReview__button' onClick={() => setShowModal(true)}><i className='far fa-edit'></i></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditReview selectedReview={selectedReview} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    )
}

export default EditReviewModal;
