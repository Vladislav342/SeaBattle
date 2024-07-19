
export const setError = (message, statusCode) => ({
	type: "ERROR",
	data: {
		id: undefined,
		login: undefined,
		message,
		statusCode
	}
})