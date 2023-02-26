import service from ".";
interface LoaginData{
    username:string,
    password:string,
}
// 登录接口
export function login(data: LoaginData){
    return service({
        url:'login',
        method:'post',
        data
    })
}
// 商品列表
export function getGoodsList(data: LoaginData){
    return service({
        url:'getGoodsList',
        method:'get',
        data
    })
}