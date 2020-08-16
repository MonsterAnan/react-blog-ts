import { GET, POST } from "../utils/http";

const api = {
  getAbout:(id:string)=>`/api/admin/getAbout/${id}`,
  editAbout: "/api/admin/addAbout",
};

/**
 * Get Article List
 * @param {keywod,pageindex,pagesize} params
 */
export function getAbout(id:string) {
  return GET(api.getAbout(id));
}

/**
 * Add Article for ArticleList
 * @param {paramsData} params
 */
export function editAbout(params:object) {
  return POST(api.editAbout, params);
}

