import React from 'react';

//Ricorda le graffe
const SignIn = ({onRouteChange}) => {
//NPM react tilt
//ctrl + d per modificare piu linee
return (
	<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw10 center">
	<main className="pa4 black-80">
	  <div className="measure">
	    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
	      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
	      <div className="mt3">
	        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
	        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
	      </div>
	      <div className="mv3">
	        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
	        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
	      </div>
	    </fieldset>
	    <div className="">
	      <input 
	      onClick={//funzione che viene chiamata
				() => onRouteChange('home')}
	      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
	    </div>
	    <div className="lh-copy mt3">
	      <p onClick={//funzione che viene chiamata
				() => onRouteChange('register')
				}  href="#0" className="f6 link dim black db pointer">Register</p>
	    </div>
	  </div>
</main>
</article>
	);
}

export default SignIn;