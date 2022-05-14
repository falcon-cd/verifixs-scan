var domain="http://127.0.0.1/edge_verified-backend";
if(location.host.includes(".com"))
{
    /*if(location.protocol!="https:")
    /*{
        //location.protocol="https:"; /** changement de protocol */
    /*}*/
    domain="http://pgc-backend.rtgroup-rdc.com"; /** live server */
}

const states = {
    baseURL: domain,
    user: {},
    configs: []
};

export default states;
