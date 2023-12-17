import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
    locales:{
        '/':{
            lang: 'zh-CN',
            title:'你好, VuePress',
            description:'一个 VuePress 的站点',
        },
        '/en/':{
            lang: 'en-US',
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator',
        }
    }
    
})