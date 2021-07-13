import { ClientParts } from "../App"

export const matchActiveUrl = (path: string) => window.location.pathname.startsWith(path)

export const integrityChecking = ClientParts => {
	if(!ClientParts.full_name || !ClientParts.email || !ClientParts.industries || !Array.isArray(ClientParts.industries) || ClientParts.industries.length === 0 ) {
		return false
	} else {
		return true
	}
}