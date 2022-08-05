import React from 'react';

//Funzione che torna HTML
const Navigation = ({onRouteChange, isSignedIn}) => {
//aggiunto stile utilizzando funzioni JReact in camelCase	//se loggato
	if (isSignedIn) {
				return(

	<nav style={{display: 'flex', justifyContent: 'flex-end' }}>
		<p onClick={//funzione che viene chiamata
				() => onRouteChange('signin')
				} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
	</nav>
	);
	} else {
		return(
		<nav style={{display: 'flex', justifyContent: 'flex-end' }}>
		<p onClick={//funzione che viene chiamata
				() => onRouteChange('signin')
				} className='f3 link dim black underline pa3 pointer'>Sign In</p>
		<p onClick={//funzione che viene chiamata
				() => onRouteChange('register')
				} className='f3 link dim black underline pa3 pointer'>Register</p>
	</nav>
	);
	}
}

export default Navigation;