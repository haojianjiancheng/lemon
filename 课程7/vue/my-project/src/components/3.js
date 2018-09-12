export function text1(){
    console.log("通过export导出")
}
export function text2(){
    console.log("通过export导出，重命名text3")
}
export function text3(){
    console.log("通过export导出3")
}
export function text4(){
    console.log("通过export导出4")
}
export function text5(){
    console.log("通过export导出5")
}
export function text6(){
    console.log("通过export导出6")
}
export function fn1(){
    console.log("这是3.js文件中的fn1方法")
}
export default{
    fn1
}
export * from "./4"