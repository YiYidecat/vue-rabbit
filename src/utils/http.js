//axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'

const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:5000
})

//拦截器
//axios请求拦截器
httpInstance.interceptors.request.use(config=>{
    //1.从Pinia获取token信息
    const userStore = useUserStore()
    //2.按照后端的要求拼接token数据
    const token = userStore.userInfo.token
    if(token) {
        //3.把token添加到请求头中
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},e=>Promise.reject(e))

//axios相应拦截器
httpInstance.interceptors.response.use(res=>res.data, e => {
    const userStore = useUserStore()

    //统一错误提示
    ElMessage({
        type:"warning",
        message:e.response.data.message 
    })

    //401token过期处理
    if(e.response.status === 401) {
        //1.清除用户信息
        userStore.clearUserInfo()
        //2.跳转到登录页
        window.location.href = '/login' // 使用window.location.href是为了避免Vue Router的导航守卫问题
    }

    return Promise.reject(e)
})


export default httpInstance