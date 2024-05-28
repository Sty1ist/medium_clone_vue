import authApi from '@/api/auth'

const state = {
    isSubmiting: false,
}

const mutations = {
    registerStart(state) {
        state.isSubmiting = true
    },
    registerSucces(state) {
        state.isSubmiting = false
    },
    registerFailure(state) {
        state.isSubmiting = false
    },
}

const actions = {
    register(context, credentials) {
        return new Promise((resolve) => {
            context.commit('registerStart')
            authApi.register(credentials)
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