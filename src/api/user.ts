import { GET, POST,PUT,DEL } from "../utils/http"

const api = {
    getUserInfo:'/api/user/login',
    user:'/api/admin/user',
}

/**
 * Get User Info
 * @param {token} params 
 */
export  function getUserInfo (params:object) {

    return GET(api.getUserInfo, params);
}

/**
 * Get User List
 * @param {keywod,pageindex,pagesize} params 
 */
export  function getUserList (params:object) {

    return GET(api.user,params);
}

/**
 * Add User for UserList
 * @param {paramsData} params 
 */
export  function addUserList (params:object) {

    return POST(api.user, params);
}

/**
 * Edit User for UserList
 * @param {paramsData} params 
 */
export  function updateUserList (params:object) {
    
    return PUT(api.user, params);
}

/**
 * Delete User for UserList
 * @param {paramsData} params 
 */
export  function delUserList (params:object) {
    
    return DEL(api.user, params);
}