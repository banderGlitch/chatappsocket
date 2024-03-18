import axios from 'axios';
import { storage } from './mmvk';

export function apiReq(endPoint, data, method, headers = {}, requestOptions = {}) {
    const mergedHeaders = { ...headers };

    console.log("endPoint=======================", endPoint)

    let requestData = {
        ...requestOptions,
        ...data,
        headers: mergedHeaders
    };

    return axios[method](endPoint, requestData)
        .then(response => response.data)
        .catch(error => {
            if (error.response && error.response.status === 401) {
                throw new Error("Unauthorized");
            } else if (error.response && error.response.data && error.response.data.message) {
                throw new Error(error.response.data.message);
            } else {
                throw new Error("Network Error");
            }
        });
}

export function apiPost(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
    return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
    return apiReq(endPoint, data, 'put', headers);
}

export const setItem = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        storage.set(key, jsonValue);
    } catch (error) {
        console.log("Error raised during setItem", error);
    }
};

export const getItem = async (key) => {
    console.log('key==========>',key)
    try {
        const data = storage.getString(key);
        console.log("Data", data)
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.log("Error raised during getItem", error);
        throw error;
    }
};

export const clearAllItem = () => {
    try {
        storage.clearAll();
    } catch (error) {
        console.log("Error raised during clearAllItem", error);
    }
};
// import axios from 'axios';
// import { storage } from './mmvk';

// export function apiReq(
//     endPoint,
//     data,
//     method,
//     headers,
//     requestOptions = {}
// ) {

//     return new Promise((res, rej) => {
//         const mergedHeaders = { ...headers };

//         if (method === 'get' || method === 'delete') {
//             data = {
//                 ...requestOptions,
//                 ...data,
//                 headers: mergedHeaders
//             };
//         }

//         axios[method](endPoint, data)
//             .then(result => {
//                 const { data } = result;

//                 if (data.status === false) {
//                     return rej(data);
//                 }

//                 return res(data);
//             })
//             .catch(error => {
//                 console.log(error && error.response, 'the error response');
//                 if (error && error.response && error.response.status === 401) {
//                     return rej({ ...error.response.data, msg: "Unauthorized" });
//                 }
//                 if (error && error.response && error.response.data) {
//                     if (!error.response.data.message) {
//                         return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" });
//                     }
//                     return rej(error.response.data);
//                 } else {
//                     return rej({ message: "Network Error", msg: "Network Error" });
//                 }
//             });
//     });
// }
// // import axios from 'axios';
// // import { storage } from './mmvk';

// // export async function apiReq(
// //     endPoint,
// //     data,
// //     method,
// //     headers,
// //     requestOptions = {}
// // ) {

// //     return new Promise(async (res, rej) => {
// //         headers = {
// //             ...headers
// //         };

// //         if (method === 'get' || method === 'delete') {
// //             data = {
// //                 ...requestOptions,
// //                 ...data,
// //                 headers
// //             };
// //         }

// //         axios[method](endPoint, data, { headers })
// //             .then(result => {
// //                 const { data } = result;

// //                 if (data.status === false) {
// //                     return rej(data);
// //                 }

// //                 return res(data);
// //             })
// //             .catch(error => {
// //                 console.log(error && error.response, 'the error respne')
// //                 if (error && error.response && error.response.status === 401) {
// //                     return rej({ ...error.response.data, msg: "Aunauthorized" })

// //                 }
// //                 if (error && error.response && error.response.data) {
// //                     if (!error.response.data.message) {
// //                         return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
// //                     }
// //                     return rej(error.response.data)
// //                 } else {
// //                     return rej({ message: "Network Error", msg: "Network Error" });
// //                 }
// //             });
// //     });
// // }


// export function apiPost(endPoint, data, headers = {}) {
//     return apiReq(endPoint, data, 'post', headers);
// }

// export function apiDelete(endPoint, data, headers = {}) {
//     return apiReq(endPoint, data, 'delete', headers);
// }

// export function apiGet(endPoint, data, headers = {}, requestOptions) {
//     return apiReq(endPoint, data, 'get', headers, requestOptions);
// }

// export function apiPut(endPoint, data, headers = {}) {
//     return apiReq(endPoint, data, 'put', headers);
// }


// export const setItem = async (key, value) => {
//     try {
//         const jsonValue = JSON.stringify(value)
//         storage.set(key, jsonValue)
//         //   await AsyncStorage.setItem(key, jsonValue)
//     } catch (e) {
//         console.log("error raised during setItem", e)
//     }
// }

// export const getItem = async (key) => {
//     return new Promise((resolve, reject) => {
//         storage.getString(key).then(data => {
//             resolve(JSON.parse(data))
//         }).catch((error) => {
//             reject(error)
//         })
//         // AsyncStorage.getItem(key).then(data=>{
//         // 	resolve(JSON.parse(data))
//         // }).catch((error)=>{
//         // 	reject(error)
//         // })
//     })
// }

// export const clearAllItem = () => {
//     try {
//         storage.clearAll()
//         // await AsyncStorage.clear()
//     } catch (e) {
//         console.log("error raised during setItem", e)
//     }
// }