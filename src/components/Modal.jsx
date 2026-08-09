
const Modal = ({ id, title, isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id={id}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-2xl border border-orange-500/40 bg-black shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-orange-500/30 bg-black px-6 py-5">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
              Darjeeling Public School
            </p>

            <h2 className="text-2xl font-bold text-white">
              {title}
            </h2>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-2xl text-white transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-black"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[65vh] overflow-y-auto bg-black px-6 py-6">
          {children}
        </div>

        {/* Footer */}
        <div className="border-t border-orange-500/20 bg-black px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            <p className="text-xs text-gray-400">
              Official School Notices & Updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;


