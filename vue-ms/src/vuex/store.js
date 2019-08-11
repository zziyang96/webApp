// import vue
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// register vuex
Vue.use(Vuex)

//state
const state = {
    //用户列表数据
    userinfo: JSON.parse(localStorage.getItem('userinfo')),
    // 映射数据
    userList:[],

    //物料列表数据
    categoryinfo: JSON.parse(localStorage.getItem('categoryinfo')),
    //映射数据
    CategoryList:[],

    //物料列表数据
    productinfo: JSON.parse(localStorage.getItem('productinfo')),
    //映射数据
    productList:[],



}
console.log(state.userinfo)
console.log(state.productinfo)

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
    },

    SAVE_CATEGORY (state,categoryinfo) {
        //store data into local
        localStorage.setItem('userinfo',JSON.stringify(categoryinfo));
        //update data
        state.categoryinfo = categoryinfo
        //console.log('函数触发后获得的用户数据：',state.userinfo)
    },
    //获取全局物料种类数据
    GET_USERLIST(state, categories){
        state.categoryList = categories;
    },

    //save materials data
    SAVE_PRODUCTINFO (state, productinfo) {
        //store data into local
        localStorage.setItem('productinfo',JSON.stringify(productinfo));
        //update data
        state.userinfo = productinfo
        //console.log('函数触发后获得的用户数据：',state.userinfo)
    },
    //获取全局物料数据
    GET_PRODUCTLIST(state, productinfo){
        state.productList = productinfo;
    }
}

//define vuex-action, commit mutation and change state by mutation
const actions = {
    //用户数据
    GET_USERLIST ({ commit }, pageObject) {
        return new Promise((resolve, reject) => {
            axios.get('/api/getuserlist').then(response => {
                commit('GET_USERLIST', response.data);
                resolve();
            })
        })   
    },

    //物料种类数据
    GET_CATEGORYLIST ({ commit }) {
        return new Promise((resolve,reject) => {
            axios.get('/api/getcategorylist').then(response => {
                commit('GET_CATEGORYLIST', response.data);
                resolve();
            })
        })
    },

    //物料数据
    GET_PRODUCTLIST ({ commit }) {
        return new Promise((resolve,reject) => {
            axios.get('/api/getmaterialslist').then(response => {
                commit('GET_PRODUCTLIST', response.data);
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