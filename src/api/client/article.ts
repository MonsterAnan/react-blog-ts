import { GET } from "utils/http"

const api = {
    swiper: '/api/article/swiper',
    recommend: '/api/article/recommend',
    getArticle:'/api/article/list',
    articleDetail:(id:string)=> `/api/article/detail/${id}`
}


/**
 * Get Article List
 * @param {pageindex,pagesize} params 
 */
export  function getSwiper (params:object) {

    return GET(api.swiper,params);
}

/**
 * Get Article List
 * @param {pageindex,pagesize} params 
 */
export  function getArticle (params:object) {

    return GET(api.getArticle,params);
}
/**
 * Get Article List
 * @param {pageindex,pagesize} params 
 */
export  function getRecommend (params:object) {

    return GET(api.recommend,params);
}
/**
 * Get Article List
 * @param {pageindex,pagesize} params 
 */
export  function articleDetail (id:string) {

    return GET(api.articleDetail(id));
}