var domain="http://127.0.0.1/edge_verified-backend";
if(location.host.includes(".com"))
{
    if(location.protocol!="https:")
    {
        location.protocol="https:"; /** changement de protocol */
    }

    if(location.host.includes("verifixs.com"))
    {
        domain="https://back-system.verifixs.com"; /** live server */
    }

}

const states = {
    baseURL: domain,
    user: {},
    configs: []
};

export default states;
