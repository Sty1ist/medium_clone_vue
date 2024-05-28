const state = {
    isSubmiting: false,
}

const mutations = {
    registerStart(state) {
        state.isSubmiting = true
    }
}

const actions = {
    register(context) {
        setTimeout(()=> {
            context.commit('registerStart')
        }, 1000)
    }
}

export default {
    state,
    mutations,
    actions
}