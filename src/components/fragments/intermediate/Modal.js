import React from "react";
import ReactDOM from 'react-dom';
import { ModalContext } from "../../../context/ModalContext";
import useEventListener from "../../../hooks/useEventListener";


const Modal = () => {

    const { modalContent, handleModal, modal} = React.useContext(ModalContext);



    if (modal) {
        return ReactDOM.createPortal(
            <div id="modalBackground" onClick={() => handleModal()} className={"fixed top-0 left-0 h-screen w-full is-flex is-align-items-center is-justify-content-center"} style={{ background: "rgba(0, 0, 0, 0.8", cursor: "pointer" }}>
                <>{ modalContent } </>
            </div>, document.querySelector("#modal-root")
        )
    } else {
        return null
    }


}

export default Modal;
