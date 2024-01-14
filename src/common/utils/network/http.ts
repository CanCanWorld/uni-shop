import {Keys} from "@/common/utils/storage/keys";
import {Api} from "@/common/utils/network/api";

// 拦截器配置
const httpInterceptor: UniApp.InterceptorOptions = {
    // 拦截前触发
    invoke(options: UniApp.RequestOptions) {
        // 1. 非 http 开头需拼接地址
        if (!options.url.startsWith('http')) {
            options.url = Api.baseURL + options.url
        }
        // 2. 请求超时
        options.timeout = 10000
        // 3. 添加小程序端请求头标识
        options.header = {
            'source-client': 'miniapp',
            ...options.header,
        }
        // 4. 添加 token 请求头标识
        const token = uni.getStorageSync(Keys.Token)
        if (token) {
            options.header.Authorization = token
        }
    },
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 文件上传
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
    code: string
    msg: string
    result: T
}

export const http = <T>(options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject) => {
        uni.request({
            ...options,
            //响应成功
            success(res) {
                const resData = res.data as Data<T>
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(resData)
                } else if (res.statusCode === 401) {
                    //401错误，清理用户信息，调整登录页
                    uni.clearStorage()
                    uni.navigateTo({url: '/pages/login/login'})
                    reject(res)
                } else {
                    uni.showToast({
                        icon: 'none',
                        title: resData.msg + res.statusCode
                    })
                    reject(res)
                }
            },
            //响应失败
            fail(err) {
                uni.showToast({
                    icon: 'none',
                    title: '网络错误'
                })
                reject(err)
            }
        })
    })
}