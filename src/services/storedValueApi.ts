/*
 * The version of the OpenAPI document: v46
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import Client from "../client";
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import { StoredValueBalanceCheckRequest } from "../typings/storedValue/models";
import { StoredValueBalanceCheckResponse } from "../typings/storedValue/models";
import { StoredValueBalanceMergeRequest } from "../typings/storedValue/models";
import { StoredValueBalanceMergeResponse } from "../typings/storedValue/models";
import { StoredValueIssueRequest } from "../typings/storedValue/models";
import { StoredValueIssueResponse } from "../typings/storedValue/models";
import { StoredValueLoadRequest } from "../typings/storedValue/models";
import { StoredValueLoadResponse } from "../typings/storedValue/models";
import { StoredValueStatusChangeRequest } from "../typings/storedValue/models";
import { StoredValueStatusChangeResponse } from "../typings/storedValue/models";
import { StoredValueVoidRequest } from "../typings/storedValue/models";
import { StoredValueVoidResponse } from "../typings/storedValue/models";
import { IRequest } from "../typings/requestOptions";
import Resource from "./resource";
import { ObjectSerializer } from "../typings/storedValue/models";

export class StoredValueAPI extends Service {
    
    private readonly API_BASEPATH: string = "https://pal-test.adyen.com/pal/servlet/StoredValue/v46";
    private baseUrl: string;

    public constructor(client: Client) {
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Changes the status of the payment method.
    * @param storedValueStatusChangeRequest {@link StoredValueStatusChangeRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link StoredValueStatusChangeResponse }
    */
    public async changeStatus(storedValueStatusChangeRequest: StoredValueStatusChangeRequest, requestOptions?: IRequest.Options): Promise<StoredValueStatusChangeResponse> {
        const endpoint = `${this.baseUrl}/changeStatus`;
        const resource = new Resource(this, endpoint);
        const request: StoredValueStatusChangeRequest = ObjectSerializer.serialize(storedValueStatusChangeRequest, "StoredValueStatusChangeRequest");
        const response = await getJsonResponse<StoredValueStatusChangeRequest, StoredValueStatusChangeResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "StoredValueStatusChangeResponse");
    }

    /**
    * @summary Checks the balance.
    * @param storedValueBalanceCheckRequest {@link StoredValueBalanceCheckRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link StoredValueBalanceCheckResponse }
    */
    public async checkBalance(storedValueBalanceCheckRequest: StoredValueBalanceCheckRequest, requestOptions?: IRequest.Options): Promise<StoredValueBalanceCheckResponse> {
        const endpoint = `${this.baseUrl}/checkBalance`;
        const resource = new Resource(this, endpoint);
        const request: StoredValueBalanceCheckRequest = ObjectSerializer.serialize(storedValueBalanceCheckRequest, "StoredValueBalanceCheckRequest");
        const response = await getJsonResponse<StoredValueBalanceCheckRequest, StoredValueBalanceCheckResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "StoredValueBalanceCheckResponse");
    }

    /**
    * @summary Issues a new card.
    * @param storedValueIssueRequest {@link StoredValueIssueRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link StoredValueIssueResponse }
    */
    public async issue(storedValueIssueRequest: StoredValueIssueRequest, requestOptions?: IRequest.Options): Promise<StoredValueIssueResponse> {
        const endpoint = `${this.baseUrl}/issue`;
        const resource = new Resource(this, endpoint);
        const request: StoredValueIssueRequest = ObjectSerializer.serialize(storedValueIssueRequest, "StoredValueIssueRequest");
        const response = await getJsonResponse<StoredValueIssueRequest, StoredValueIssueResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "StoredValueIssueResponse");
    }

    /**
    * @summary Loads the payment method.
    * @param storedValueLoadRequest {@link StoredValueLoadRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link StoredValueLoadResponse }
    */
    public async load(storedValueLoadRequest: StoredValueLoadRequest, requestOptions?: IRequest.Options): Promise<StoredValueLoadResponse> {
        const endpoint = `${this.baseUrl}/load`;
        const resource = new Resource(this, endpoint);
        const request: StoredValueLoadRequest = ObjectSerializer.serialize(storedValueLoadRequest, "StoredValueLoadRequest");
        const response = await getJsonResponse<StoredValueLoadRequest, StoredValueLoadResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "StoredValueLoadResponse");
    }

    /**
    * @summary Merge the balance of two cards.
    * @param storedValueBalanceMergeRequest {@link StoredValueBalanceMergeRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link StoredValueBalanceMergeResponse }
    */
    public async mergeBalance(storedValueBalanceMergeRequest: StoredValueBalanceMergeRequest, requestOptions?: IRequest.Options): Promise<StoredValueBalanceMergeResponse> {
        const endpoint = `${this.baseUrl}/mergeBalance`;
        const resource = new Resource(this, endpoint);
        const request: StoredValueBalanceMergeRequest = ObjectSerializer.serialize(storedValueBalanceMergeRequest, "StoredValueBalanceMergeRequest");
        const response = await getJsonResponse<StoredValueBalanceMergeRequest, StoredValueBalanceMergeResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "StoredValueBalanceMergeResponse");
    }

    /**
    * @summary Voids a transaction.
    * @param storedValueVoidRequest {@link StoredValueVoidRequest } 
    * @param requestOptions {@link IRequest.Options}
    * @return {@link StoredValueVoidResponse }
    */
    public async voidTransaction(storedValueVoidRequest: StoredValueVoidRequest, requestOptions?: IRequest.Options): Promise<StoredValueVoidResponse> {
        const endpoint = `${this.baseUrl}/voidTransaction`;
        const resource = new Resource(this, endpoint);
        const request: StoredValueVoidRequest = ObjectSerializer.serialize(storedValueVoidRequest, "StoredValueVoidRequest");
        const response = await getJsonResponse<StoredValueVoidRequest, StoredValueVoidResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "StoredValueVoidResponse");
    }
}

export default StoredValueAPI;
