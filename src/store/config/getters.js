const getters = {
    getUser: function(state)
    {
        var user=state.user;

        if(user==null)
        {
            /**
             * Recuperer le user de la mémoire sessionStorage du navigateur
             * @type {string}
             */
            var u=localStorage.getItem("user");
            if(u!=undefined && u!=null)
            {
                user=JSON.parse(u);
            }
        }

        return user;
    },
    getConfigs: state => state.configs,
};

export default getters;
