import React from 'react';
import './ImageLinkForm.css';


//Funzione che torna HTML
// gli argomenti sono presti da App, sono comandi. Onclick ascolta l'evento
const ImageLinkForm = ( {onInputChange, onButtonSubmit}) => {
//f3 size
return (
	<div>
		<p className='f3'>
		{'This brain will detect image!'}
		</p>
		<div className = 'center'>
		<div className='form center pa4 br3 shadow-5'>
		<input  className= 'f4 pa2 w-70 center'type = 'text' onChange ={onInputChange}/>
		<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
			onClick = {//funzione che viene chiamata
				() => onButtonSubmit('home')}
		>Detect</button>
				</div>
		</div>
	</div>
	);
}

export default ImageLinkForm;