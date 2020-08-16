import { GET, POST,PUT,DEL } from "../utils/http"

const api = {
    article: '/api/admin/article',
    update:(id:string)=> `/api/admin/article/${id}`
}


/**
 * Get Article List
 * @param {keywod,pageindex,pagesize} params 
 */
export  function getArticleList (params:object) {

    return GET(api.article,params);
}

/**
 * Add Article for ArticleList
 * @param {paramsData} params 
 */
export  function addArticleList (params:object) {

    return POST(api.article, params);
}

/**
 * Edit Article for ArticleList
 * @param {paramsData} params 
 */
export  function updateArticleOne (id:string,params:object) {
    
    return PUT(api.update(id), params);
}

/**
 * Delete Article for ArticleList
 * @param {paramsData} params 
 */
export  function delArticleList (params:object) {
    
    return DEL(api.article, params);
}