import React from 'react';

//Funzione che torna HTML
const FaceRecognition = ({imageUrl}) => {
//aggiunto stile utilizzando funzioni JReact in camelCase
//na mt2 sono tutte componenti di tachyon
return (
	<div className='center na'>
	<div className='absolute mt2'>
	<img alt = '' src = {imageUrl} width='500' height='auto'/>
	</div>
	</div>
	);
}

export default FaceRecognition;