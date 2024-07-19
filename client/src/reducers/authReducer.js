
const initialstate = {
	id: null,
	login: null,
    message: null,
    statusCode: null
};

function authReducer(state = initialstate, action) {
    console.log(action);
    switch(action.type){
    	case "LOGIN":
    		return {
                ...state,
                ...action.data
            }
        case "ERROR":
            return{
                ...state,
                ...action.data
            }
        case "LOGOUT":
            return {
                ...state,
                ...initialstate
            };
    	default: 
    		return state;
    }
}

export default authReducer;
