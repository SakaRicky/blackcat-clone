import React from "react";
import modal_background from "../assets/images/modal_background.png";

export const Modal = ({ children, closeModal }) => {
	return (
		<div
			className="fixed z-50 inset-0 bg-black bg-opacity-75 transition-opacity"
			style={{
				backgroundImage: `url(${modal_background})`,
				backgroundPosition: "top",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
			onClick={closeModal}
		>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				{children}
			</div>
		</div>
	);
};
