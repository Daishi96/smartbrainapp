import React from 'react';

//Funzione che torna HTML
const Navigation = () => {
//aggiunto stile utilizzando funzioni JReact in camelCase
return (
	<nav style={{display: 'flex', justifyContent: 'flex-end' }}>
		<p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
	</nav>
	);
}

export default Navigation;