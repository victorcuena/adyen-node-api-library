/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { ApiCredential } from "../../typings/management/models";
import { CreateApiCredentialResponse } from "../../typings/management/models";
import { CreateMerchantApiCredentialRequest } from "../../typings/management/models";
import { ListMerchantApiCredentialsResponse } from "../../typings/management/models";
import { UpdateMerchantApiCredentialRequest } from "../../typings/management/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";
import { ObjectSerializer } from "../../typings/management/models";

export class APICredentialsMerchantLevelApi extends Service {

    private readonly API_BASEPATH: string = "https://management-test.adyen.com/v1";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get a list of API credentials
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param pageNumber {@link number } The number of the page to fetch.
    * @param pageSize {@link number } The number of items to have on a page, maximum 100. The default is 10 items on a page.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ListMerchantApiCredentialsResponse }
    */
    public async listApiCredentials(merchantId: string, requestOptions?: IRequest.Options): Promise<ListMerchantApiCredentialsResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/apiCredentials`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ListMerchantApiCredentialsResponse>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ListMerchantApiCredentialsResponse");
    }

    /**
    * @summary Get an API credential
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ApiCredential }
    */
    public async getApiCredential(merchantId: string, apiCredentialId: string, requestOptions?: IRequest.Options): Promise<ApiCredential> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/apiCredentials/{apiCredentialId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "apiCredentialId" + "}", encodeURIComponent(String(apiCredentialId)));
        const resource = new Resource(this, endpoint);
        const response = await getJsonResponse<string, ApiCredential>(
            resource,
            "",
            { ...requestOptions, method: "GET" }
        );
        return ObjectSerializer.deserialize(response, "ApiCredential");
    }

    /**
    * @summary Update an API credential
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param apiCredentialId {@link string } Unique identifier of the API credential.
    * @param updateMerchantApiCredentialRequest {@link UpdateMerchantApiCredentialRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link ApiCredential }
    */
    public async updateApiCredential(merchantId: string, apiCredentialId: string, updateMerchantApiCredentialRequest: UpdateMerchantApiCredentialRequest, requestOptions?: IRequest.Options): Promise<ApiCredential> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/apiCredentials/{apiCredentialId}`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)))
            .replace("{" + "apiCredentialId" + "}", encodeURIComponent(String(apiCredentialId)));
        const resource = new Resource(this, endpoint);
        const request: UpdateMerchantApiCredentialRequest = ObjectSerializer.serialize(updateMerchantApiCredentialRequest, "UpdateMerchantApiCredentialRequest");
        const response = await getJsonResponse<UpdateMerchantApiCredentialRequest, ApiCredential>(
            resource,
            request,
            { ...requestOptions, method: "PATCH" }
        );
        return ObjectSerializer.deserialize(response, "ApiCredential");
    }

    /**
    * @summary Create an API credential
    * @param merchantId {@link string } The unique identifier of the merchant account.
    * @param createMerchantApiCredentialRequest {@link CreateMerchantApiCredentialRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link CreateApiCredentialResponse }
    */
    public async createApiCredential(merchantId: string, createMerchantApiCredentialRequest: CreateMerchantApiCredentialRequest, requestOptions?: IRequest.Options): Promise<CreateApiCredentialResponse> {
        const endpoint = `${this.baseUrl}/merchants/{merchantId}/apiCredentials`
            .replace("{" + "merchantId" + "}", encodeURIComponent(String(merchantId)));
        const resource = new Resource(this, endpoint);
        const request: CreateMerchantApiCredentialRequest = ObjectSerializer.serialize(createMerchantApiCredentialRequest, "CreateMerchantApiCredentialRequest");
        const response = await getJsonResponse<CreateMerchantApiCredentialRequest, CreateApiCredentialResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "CreateApiCredentialResponse");
    }
}
