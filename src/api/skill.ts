import { GET, POST,PUT,DEL } from "../utils/http"

const api = {
    skill: '/api/admin/skill',
    updateSkillAll: `/api/admin/skill/all`,
    updateSkill:(id:string)=> `/api/admin/skill/${id}`
}


/**
 * Get skill List
 * @param {keywod,pageindex,pagesize} params 
 */
export  function getskillList (params:object) {

    return GET(api.skill,params);
}

/**
 * Add skill for skillList
 * @param {paramsData} params 
 */
export  function addskill (params:object) {

    return POST(api.skill, params);
}

/**
 * Edit skill for skillList
 * @param {paramsData} params 
 */
export  function updateskillList (id:string,params:object) {
    
    return PUT(api.updateSkill(id), params);
}
/**
 * update All
 * @param {paramsData} params 
 */
export  function updateskillAll (params:object) {
    return PUT(api.updateSkillAll, params);
}
/**
 * Delete skill for skillList
 * @param {paramsData} params 
 */
export  function delskillList (params:object) {
    
    return DEL(api.skill, params);
}