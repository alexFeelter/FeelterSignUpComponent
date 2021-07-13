import Keycloak from "keycloak-js";

// import sdf from "../services"

const _kc = new Keycloak('/keycloak.json');

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */

const initKeycloak = (onAuthenticatedCallback) => {
	_kc.init({
	//   onLoad: 'check-sso',
	  silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
	  pkceMethod: 'S256',
	  onLoad: "login-required",
	  promiseType: 'native',

	})
	.then((authenticated) => {
		onAuthenticatedCallback();
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
const getUserId = () => _kc.tokenParsed?.sub;

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
	getUserId
};