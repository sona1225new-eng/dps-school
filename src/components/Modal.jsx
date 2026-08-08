const Modal = ({ id, title, isOpen, onClose, children }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'show' : ''}`} id={id}>
      <div className="modal-content text-on-surface">
        <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-2">
          <h2 className="font-headline-md text-headline-md text-primary">{title}</h2>
          <button className="text-on-surface-variant hover:text-on-surface" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
