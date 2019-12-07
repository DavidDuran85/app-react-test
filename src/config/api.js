import axios from 'axios'

const instance = axios.create({
    baseURL:'http://jsonplaceholder.typicode.com'
})

function get (url, params) {
    return instance.get(url,params)
}

function post (url, params) {
    return instance.post(url,params)
}
function put (url, params) {
    return instance.put(url,params)
}
function del (url, params) {
    return instance.del(url,params)
}


let api ={
    get,
    post,
    put,
    del
}
export default api