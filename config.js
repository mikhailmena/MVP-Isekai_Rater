module.exports = {
    dev:{
        connectionString: 'postgres://isekaidb_user:RLsF1COjLO1kay2bRSBuFQuwuDKvkUzd@dpg-cd25l0aen0hm1tsdiimg-a.oregon-postgres.render.com/isekaidb',
        port: '8000'
    },
    production:{
        connectionString: process.env.POST_CONNECTION_STRING + "?ssl=true",
        port: process.env.PORT
    }

}