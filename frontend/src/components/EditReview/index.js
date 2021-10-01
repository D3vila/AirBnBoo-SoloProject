import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReview from './EditReview';
import './editReview.css'

function EditReviewModal({ selectedReview }) {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className='editReviewButtonDIV'>
            <button className='editReview__button' onClick={() => setShowModal(true)}><i className='fas fa-pen'></i></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditReview selectedReview={selectedReview} setShowModal={setShowModal} />
                </Modal>
            )}
        </div>
    )
}

export default EditReviewModal;
