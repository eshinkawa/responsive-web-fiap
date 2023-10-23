import ReactModal from 'react-modal';

const Modal = (props) => {
    const { isOpen, setIsOpen, personagemDetalhado } = props;  //destructuring 
    return (
        <ReactModal
            isOpen={isOpen}
            contentLabel="Modal Exemplo"
        >
            <h2>{personagemDetalhado.name}</h2>
            <h3>{personagemDetalhado.gender}</h3>
            <h3>{personagemDetalhado.species}</h3>
            <button onClick={setIsOpen}>Close Modal</button>
        </ReactModal>)
};

export default Modal;