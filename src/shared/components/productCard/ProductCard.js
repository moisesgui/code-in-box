import React from "react";

import thumbnail from '../../../assets/imagens/react-thumbnail.png'
import './ProductCard.scss';

export const ProductCard = () => {

	return (
		<div className="card-container">
			<img src={thumbnail} alt="course thumbnails" />
			<div className="p-5">
				<a href="#">
					<h5>Curso básico de introdução a React e Redux</h5>
				</a>
				<p className="card-description">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
				<div className="w-full items-end">
					<a href="#" className="card-description--button">
						Acessar curso
						<svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</a>
				</div>
			</div>
		</div>
	);
}