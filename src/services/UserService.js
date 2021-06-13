import Keycloak from "keycloak-js";

// import sdf from "../services"

const _kc = new Keycloak('/keycloak.json');

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
// const initKeycloak = (onAuthenticatedCallback) => {
// 	console.log('esletext')
//   console.log(_kc.init({
// 	// onLoad: 'check-sso',
// 	onLoad: "login-required", 
// 	promiseType: 'native',
// 	silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
// 	pkceMethod: 'S256',
//   }).catch(e => console.log(e)))
// 	.then((authenticated) => {

// 		if (authenticated) {
// 			console.log("test")
// 			onAuthenticatedCallback();
// 		} else {
// 			console.log("esleTest")
// 			doLogin();
// 		}
// 	})
// 	// .catch(e => {console.error('keycloak', e); onAuthenticatedCallback()})
// };

const initKeycloak = (onAuthenticatedCallback) => {
	_kc.init({
	//   onLoad: 'check-sso',
	  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
	  pkceMethod: 'S256',
	  onLoad: "login-required",
	  promiseType: 'native',

	})
	  .then((authenticated) => {
		// if (authenticated) {
		onAuthenticatedCallback();
		// } else {
		//   doLogin();
		// }
	  })
  };

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
	_kc.updateToken(5)
		.then(successCallback)
		.catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

export const UserService = {
	initKeycloak,
	doLogin,
	doLogout,
	isLoggedIn,
	getToken,
	updateToken,
	getUsername,
	hasRole,
};