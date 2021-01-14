import s from './styles.module.css'

import ReactModal from 'react-modal'
import { Button } from '../Button'
import React from 'react'
import { OpinionForm } from '../OpinionForm'
import { Title } from '../Title'
// import { useCallback } from 'react'

// type OnRequestClose = (event: React.MouseEvent | React.KeyboardEvent) => void

export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<{
    modalIsOpen: boolean
    setModalIsOpen: (isOpen: boolean) => void
}> = ({ modalIsOpen, setModalIsOpen }) => {
    const delay = 250

    return (
        <ReactModal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={() => setModalIsOpen(false)}
            closeTimeoutMS={delay}
            // style={customStyles}
            className={s.modal}
            overlayClassName={s.overlay}
            ariaHideApp={false}
        >
            <div className={s.title}>
                <Title level={3}>
                    Благоустройство Набережной Верхнетуринского пруда | Опрос горожан
                </Title>
                <Button
                    onClick={() => setModalIsOpen(false)}
                    theme={'link'}
                    size='small'
                    className={s.close}                    
                >
                    <img
                        src='/static/closeMenu.svg'
                        style={{
                            width: 32,
                            height: 32,
                        }}
                    />
                </Button>
            </div>

            <OpinionForm />
        </ReactModal>
    )
}