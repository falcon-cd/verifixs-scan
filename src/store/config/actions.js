import axios from "axios";
//import { scroller } from "vue-scrollto/src/scrollTo";

const actions = {
    logout() {
        localStorage.removeItem("user");
    },

    logged_user({ commit }) {
        let user = localStorage.getItem("user");
        let data = JSON.parse(user);
        commit("setUser", data);
    },

    viewConfigData({ commit, state }) {
        axios.get(`${state.baseURL}/content/config/menu`).then((result) => {
            commit('setConfigs', result.data.config);
            //console.log(JSON.stringify(result));
        })
    },
    login({state},data) /** method pour le login */
    {
        return new Promise(function(resolve)
        {
            axios.post(state.baseURL+"/utilisateurs/connexion/login",data).then(function(result)
            {
                var data=result.data;
                resolve(data);
            });
        });
    },
    logUserIn({commit},data) /** method pour sauvegarder les données d'un user connecté */
    {
        //console.log("Before commit:"); console.log(data);
        commit("setUser",data);
    },
    logUserOut() /** method pour deconnecter un user */
    {
        localStorage.removeItem("user");
    }


};

export default actions;
