import { expect } from "@playwright/test";

class BaseApi {
    constructor() {
        url = 'https://api.restful-api.dev/'
    }

    /**
     * @function postRequest
     */
    async postRequest(url, body, status) {
            return ;
    }

    /**
     * @function getRequest
     */
    async getRequest(url) {
            return response;
    }

    /**
     * @function putRequest
     */
    async putRequest(url, body, token) {
         return response;
    }

    /**
     * @function patchRequest

     */
    async patchRequest(url, body, token) {
            return response;
    }

    /**
     * @function deleteRequest
     */
    async deleteRequest(url) {
            return response;
    }
}

export default BaseApi;
