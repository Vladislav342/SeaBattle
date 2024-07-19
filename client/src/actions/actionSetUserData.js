
export const setUserData = (id, login) => ({
	type: "LOGIN",
	data: {
		id,
		login,
		message: undefined,
		statusCode: undefined
	}
})