import keycloak_js from "keycloak-js";
import { createKeycloakAdapter } from "keycloakify";

import { injectGlobalStatesInSearchParams } from "powerhooks/useGlobalState";

// import sdf from "../services"

const _kc = keycloak_js({
	"url": "http://localhost:8989/auth/",
    "realm": "alexTestRealm",
    "clientId": "yair-alex"
})

_kc.init({
	//   onLoad: 'check-sso',
	onLoad: "login-required",
	silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
	adapter: createKeycloakAdapter({
		"transformUrlBeforeRedirect": injectGlobalStatesInSearchParams,
		keycloakInstance: _kc
	})
})