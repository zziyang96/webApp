// import vue
import Vue from 'vue'
import Vuex from 'vuex'

// register vuex
Vue.use(Vuex)

//state
const state = {
    userinfo: JSON.parse(localStorage.getItem('userinfo')),
    // 映射数据
    userList:[]
}
console.log(state.userinfo)

//define mutations  control state
const mutations = {
    // save users data
    SAVE_USERINFO (state, userinfo) {

        // store data into local
        localStorage.setItem('userinfo',JSON.stringify(userinfo));

        //update data
        state.userinfo = userinfo

        //console.log('函数触发')
        //console.log('触发后获得的用户数据：',state.userinfo)
    },
    //获取全局用户数据
    GET_USERLIST(state, userlist){
        state.userList = userlist;
    }
}

//define vuex-action, commit mutation and change state control by mutation
const actions = {
    GET_USERLIST ({ commit }){
        return new PromiseRejectionEvent((resolve, reject) => {
            axios.get('/api/getuserlist').then(response => {
                commit('GET_USERLIST', response.data);
                resolve();
            })
        })   
    }
}


//create storage and explose data
export default new Vuex.Store({
    state,
    mutations,
    actions
})