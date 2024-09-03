'use client'

import { useState } from 'react';
import Instructions from '../instructions/page';

function InstructionsModal() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    window.history.pushState({}, '', '/');
    setShowModal(true);
  };

  return (
    <>
      <button
        className="flex flex-col items-center text-white text-[14px] font-montserrat justify-center bg-blue-800 border-[3px] border-[#C2A77E] hover:bg-violet-800 hover:border-pink-500 drop-shadow-lg shadow-black transition-colors duration-300 rounded-xl w-[200px] h-[37px] [filter:drop-shadow(1px_4px_4px_#000000)]"
        onClick={handleClick}
      >
        Instructions
      </button>
      {showModal && (
        <div className="modal-container">
          <div className="modal">
            <Instructions closeModal={() => setShowModal(false)} />
          </div>
        </div>
      )}
    </>
  );
}

export default InstructionsModal;
