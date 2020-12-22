import s from './styles.module.css'

import ReactModal from 'react-modal'
import { Button } from '../Button'
// import { useCallback } from 'react'

// type OnRequestClose = (event: React.MouseEvent | React.KeyboardEvent) => void

export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<ModalProps> = props => {
    const delay = 250

    // const onRequestClose = useCallback<OnRequestClose>(event => {
    //     (props.onRequestClose as any)(event)
    // }, [props.onRequestClose])

    return (
        <ReactModal
            isOpen={props.isOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={props.onRequestClose}
            closeTimeoutMS={delay}
            // style={customStyles}
            contentLabel={props.contentLabel}
            className={s.modal}
            overlayClassName={s.overlay}
            ariaHideApp={false}
        >
            <div className={s.title}>
                <h2>{props.contentLabel}</h2>
                <Button
                    onClick={props.onRequestClose as any}
                    theme={'link'}
                >close</Button>
            </div>

            {props.children}
        </ReactModal>
    )
}