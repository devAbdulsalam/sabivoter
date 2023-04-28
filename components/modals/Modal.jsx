import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';
const Modal = ({ show, onClose, children }) => {
	return (
		<div
			style={{ transform: show ? 'translateX(0)' : 'translateX(-200%)' }}
			className={`bg-black/80 absolute flex inset-0 justify-center items-center top-0 left-0 right-0 buttom-0 overflow-hidden z-50 transition-all duration-500 ease-in-out`}
		>
			<div className="max-w-[700px] bg-slate-300 ">
				<div className="flex flex-shrink-0 items-center justify-end p-1">
					<AiOutlineClose
						className="w-6 h-6 cursor-pointer text-gray-800 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-100 float-right p-1 rounded-full"
						onClick={() => onClose(false)}
					/>
				</div>
				<>{children}</>
			</div>
		</div>
	);
};

export default Modal;
