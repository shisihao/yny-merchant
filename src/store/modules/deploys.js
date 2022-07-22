import { DominKey, OssKey, setToken } from '@/utils/auth'

const state = {
  configInfo: ''
}

const mutations = {
  SET_CONFIGINFO: (state, obj) => {
    state.configInfo = obj
  }
}

const actions = {
  getConfigInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      getConfig()
        .then(response => {
          const { data } = response
          if (data) {
            const configInfo = {}
            data.forEach(element => {
              configInfo[element.key] = element.value
              if (element.key === 'oss') {
                setToken(element.value.DoMain, DominKey)
                setToken(element.value, OssKey)
              }
            })
            commit('SET_CONFIGINFO', configInfo)
            resolve(data)
          } else {
            reject('Has error')
          }
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
