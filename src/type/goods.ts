export interface ListInt{
    userId:string,
    id:string,
    title:string,
    introduce:string,
}
// 定义商品数据类型
interface selectDateInt{
    title:string,
    introduce:string,
    page:number, // 页码
    count:number, // 总条数
    pagesize:number, // 默认一页显示多少条
}

export class IntData{
    // 定义搜索表单
    selectDate:selectDateInt={
        title:'',
        introduce:'',
        page:1,
        count:0,
        pagesize:10,
    }
    list:ListInt[]=[] // 展示内容的数据
}