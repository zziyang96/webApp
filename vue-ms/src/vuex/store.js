// import vue
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// register vuex
Vue.use(Vuex)

//state
const state = {
    userinfo: JSON.parse(localStorage.getItem('userinfo')),
    // 映射数据
    userList:[]
}
console.log(state.userinfo)

//define vuex-mutations, control state
const mutations = {
    // save users data
    SAVE_USERINFO (state, userinfo) {

        // store data into local
        localStorage.setItem('userinfo',JSON.stringify(userinfo));

        //update data
        state.userinfo = userinfo
        //console.log('函数触发后获得的用户数据：',state.userinfo)
    },
    //获取全局用户数据
    GET_USERLIST(state, userlist){
        state.userList = userlist;
    }
}

//define vuex-action, commit mutation and change state by mutation
const actions = {
    GET_USERLIST ({ commit }, pageObject) {
        return new Promise((resolve, reject) => {
            axios.get('/api/getuserlist').then(response => {
                commit('GET_USERLIST', response.data);
                resolve();
            })
        })   
    }
}

//define getter, Globally Shared data
const getters = {
    Admin: state => state.userList.filter(v => v.idType.length <= 3)
}






console.log()
//create storage and explose data
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})