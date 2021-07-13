import { ClientParts } from "../App"

export const matchActiveUrl = (path: string) => window.location.pathname.startsWith(path)

export const integrityChecking = ClientParts => {
	console.log("ClientParts ", ClientParts)
	if(!ClientParts.fullName || !ClientParts.domain || !ClientParts.industries || !Array.isArray(ClientParts.industries) || ClientParts.industries.length === 0  ) {
		console.log('integrityChecking false')
		return false
	} else {
		console.log('integrityChecking true')
		return true
	}
}