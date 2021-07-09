// import axios, {AxiosInstance} from 'axios';
// import {INVOKE_HOMES_URL, INVOKE_SPOTS_URL, INVOKE_URL /* BASE_URL */} from './constants';
//
// class SearchApi {
//     apiInstance: AxiosInstance;
//
//     constructor() {
//         this.apiInstance = axios.create({
//             baseURL: INVOKE_HOMES_URL,
//             withCredentials: false,
//         });
//     }
//
//     async getAll() {
//         try {
//             const result = await this.apiInstance.get('/homes');
//             return {data: result.data, hasError: false};
//
//         } catch (err) {
//             return {data: [], hasError: true, error: err};
//         }
//     }
//
//     async getMyHosue(id: string) {
//         try {
//             const result = await this.apiInstance.get('/homes/' + id);
//             return {data: result.data, hasError: false};
//
//         } catch (err) {
//             return {data: [], hasError: true, error: err};
//         }
//     }
// }
//
// const SearchService = new SearchApi();
//
// export default SearchService;
