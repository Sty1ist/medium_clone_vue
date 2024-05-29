import authApi from '@/api/auth'

const state = {
    isSubmiting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

const mutations = {
    registerStart(state) {
        state.isSubmiting = true
        state.validationErrors = null
    },
    registerSucces(state, payload) {
        state.isSubmiting = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    registerFailure(state, payload) {
        state.isSubmiting = false
        state.validationErrors = payload
    },
}

const actions = {
    register(context, credentials) {
        return new Promise((resolve) => {
            context.commit('registerStart')
            authApi
                .register(credentials)
                .then(response => {
                    console.log('response', response)
                    context.commit('registerSucces', response.data.user)
                    resolve(response.data.user)
                })
                .catch(result => {
                    console.log('result errors', result)
                    context.commit('registerFailure', result.response.data.errors)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}