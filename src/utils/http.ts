import { toast } from "react-toastify";
// 检查状态码
function checkStatus(res:any) {
  // 结束
  if (res.status === 200 || res.status === 304) {
    return res.json();
  }
  return {
    code: 0,
    msg: res.data.msg || res.statusText,
    data: res.statusText,
  };
}

// 检查CODE值
function checkCode(resData:any ) {
  if (resData.code === 0) {
    toast(resData.msg);
  }

  return resData;
}
function formatParam(url:string, params?:any) {
  if (!params) {
    return url;
  }
  let paramsArray:any  = [];
  //拼接参数
  Object.keys(params).forEach((key) =>
    paramsArray.push(key + "=" + params[key])
  );

  if (url.search(/\?/) === -1) {
    return (url += "?" + paramsArray.join("&"));
  } else {
    return (url += "&" + paramsArray.join("&"));
  }
}
export function GET(url:string, params?:any) {
  if (!url) return;

  return fetch(formatParam(url, params), {
    method: "GET",
  })
    .then(checkStatus)
    .then((resJson) => {
      return checkCode(resJson);
    })
    .catch((err) => console.error(err));
}
// post方式
//put 修改
export function POST(url:string, data?:any) {
  if (!url) return;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then((resJson) => {
      return checkCode(resJson);
    })
    .catch((err) => console.error(err));
}

//put 修改
export function PUT(url:string, data?:any) {
  if (!url) return;
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(checkStatus)
    .then((resJson) => {
      return checkCode(resJson);
    })
    .catch((err) => console.error(err));
}

//delete
export function DEL(url:string, params?:any) {
  if (!url) return;
  return fetch(formatParam(url, params), {
    method: "DELETE",
  })
    .then(checkStatus)
    .then((resJson) => {
      return checkCode(resJson);
    })
    .catch((err) => console.error(err));
}
