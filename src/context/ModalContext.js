import React from 'react';
import ReactDOM from "react-dom";

let ModalContext;
const {Provider} = (ModalContext = React.createContext(undefined));

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


const useModal = () => {

    const [modal, setModal] = React.useState(false);
    const [modalContent, setModalContent] = React.useState(null);

    let handleModal = (content = null) => {
        setModal(!modal);
        if (content) {
            setModalContent(content);
        }
    }

    return { modal, handleModal, modalContent }

}



const ModalProvider = ({ children }) => {
    const { modal, handleModal, modalContent } = useModal();

    return (
        <Provider value={{ modal, handleModal, modalContent }}>
            <Modal />
            { children }
        </Provider>
    )

};

export {useModal, ModalProvider};
