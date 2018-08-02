const user  = {
    state: {
        login: true, // Wether to display login or create account page
    },
    mutations: {
        SET_LOGIN: (state, login) => {
            state.login = login
        }
    },
    actions: {
        
    }
}
export default user;