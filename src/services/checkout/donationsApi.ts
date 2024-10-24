/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import getJsonResponse from "../../helpers/getJsonResponse";
import Service from "../../service";
import Client from "../../client";
import { 
    DonationCampaignsRequest,
    DonationCampaignsResponse,
    DonationPaymentRequest,
    DonationPaymentResponse,
    ObjectSerializer
} from "../../typings/checkout/models";
import { IRequest } from "../../typings/requestOptions";
import Resource from "../resource";

export class DonationsApi extends Service {

    private readonly API_BASEPATH: string = "https://checkout-test.adyen.com/v71";
    private baseUrl: string;

    public constructor(client: Client){
        super(client);
        this.baseUrl = this.createBaseUrl(this.API_BASEPATH);
    }

    /**
    * @summary Get a list of donation campaigns.
    * @param donationCampaignsRequest {@link DonationCampaignsRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DonationCampaignsResponse }
    */
    public async donationCampaigns(donationCampaignsRequest: DonationCampaignsRequest, requestOptions?: IRequest.Options): Promise<DonationCampaignsResponse> {
        const endpoint = `${this.baseUrl}/donationCampaigns`;
        const resource = new Resource(this, endpoint);
        const request: DonationCampaignsRequest = ObjectSerializer.serialize(donationCampaignsRequest, "DonationCampaignsRequest");
        const response = await getJsonResponse<DonationCampaignsRequest, DonationCampaignsResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "DonationCampaignsResponse");
    }

    /**
    * @summary Start a transaction for donations
    * @param donationPaymentRequest {@link DonationPaymentRequest } 
    * @param requestOptions {@link IRequest.Options }
    * @return {@link DonationPaymentResponse }
    */
    public async donations(donationPaymentRequest: DonationPaymentRequest, requestOptions?: IRequest.Options): Promise<DonationPaymentResponse> {
        const endpoint = `${this.baseUrl}/donations`;
        const resource = new Resource(this, endpoint);
        const request: DonationPaymentRequest = ObjectSerializer.serialize(donationPaymentRequest, "DonationPaymentRequest");
        const response = await getJsonResponse<DonationPaymentRequest, DonationPaymentResponse>(
            resource,
            request,
            { ...requestOptions, method: "POST" }
        );
        return ObjectSerializer.deserialize(response, "DonationPaymentResponse");
    }
}
