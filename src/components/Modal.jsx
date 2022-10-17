import React from "react";
import modal_background from "../assets/images/modal_background.png";

export const Modal = ({ children, closeModal }) => {
	return (
		<div
			className="fixed z-20 inset-0 bg-black bg-opacity-75 transition-opacity"
			style={{
				backgroundImage: `url(${modal_background})`,
				backgroundPosition: "top",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
				{children}
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-12 h-12 absolute top-8 right-4 text-gray-300 hover:text-white cursor-pointer"
				onClick={closeModal}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</div>
	);
};
