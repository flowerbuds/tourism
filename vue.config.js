const path = require("path");
module.exports = {
    baseUrl: "frontend/dist/",
    productionSourceMap: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('assets', '@/assets')
            .set('components', '@/components')
            .set('views', '@/views')
            .set('library', '@/lib')
            .set('api', '@/api')
            .set('store', '@/store')
            .set('style', '@/style');
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios'
        });
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://fastshop.1zmg.com',
                ws: true,
                changeOrigin: true
            }
        }
    }
}