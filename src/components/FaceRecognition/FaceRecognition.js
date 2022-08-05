import React from 'react';
import './FaceRecognition.css';

//Funzione che torna HTML
const FaceRecognition = ({imageUrl, box}) => {
//aggiunto stile utilizzando funzioni JReact in camelCase
//na mt2 sono tutte componenti di tachyon
//img dato dal DOM
return (
	<div className='center na'>
	<div className='absolute mt2'>
	<img id='inputImage' alt = '' src = {imageUrl} width='500px' height='auto'/>
	<div className='bounding-box' style ={ 
		{ top: box.topRow, 
			right: box.rightCol, 
			bottom: box.bottomRow, 
			left: box.leftCol}
      } ></div>	
	</div>
	</div>
	);
}

export default FaceRecognition;