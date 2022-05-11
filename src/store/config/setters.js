const mutations = {
    setUser:function(state, data)
    {
        /**
         * Sauvegarder aussi dans la mémoire sessionStorage du navigateur
         */
        sessionStorage.setItem("user",JSON.stringify(data));
        localStorage.setItem("user",JSON.stringify(data));

        state.user = data; /** sauvegarder dans le store */
    },
    setConfigs: (state, data) => state.configs = data
};

export default mutations;
