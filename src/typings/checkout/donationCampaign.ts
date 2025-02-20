/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amounts } from './amounts';
import { Donation } from './donation';

export class DonationCampaign {
    'amounts'?: Amounts | null;
    /**
    * The URL for the banner of the nonprofit or campaign.
    */
    'bannerUrl'?: string;
    /**
    * The name of the donation campaign..
    */
    'campaignName'?: string;
    /**
    * The cause of the nonprofit.
    */
    'causeName'?: string;
    'donation'?: Donation | null;
    /**
    * The unique campaign ID of the donation campaign.
    */
    'id'?: string;
    /**
    * The URL for the logo of the nonprofit.
    */
    'logoUrl'?: string;
    /**
    * The description of the nonprofit.
    */
    'nonprofitDescription'?: string;
    /**
    * The name of the nonprofit organization that receives the donation.
    */
    'nonprofitName'?: string;
    /**
    * The website URL of the nonprofit.
    */
    'nonprofitUrl'?: string;
    /**
    * The URL of the terms and conditions page of the nonprofit and the campaign.
    */
    'termsAndConditionsUrl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amounts",
            "baseName": "amounts",
            "type": "Amounts | null"
        },
        {
            "name": "bannerUrl",
            "baseName": "bannerUrl",
            "type": "string"
        },
        {
            "name": "campaignName",
            "baseName": "campaignName",
            "type": "string"
        },
        {
            "name": "causeName",
            "baseName": "causeName",
            "type": "string"
        },
        {
            "name": "donation",
            "baseName": "donation",
            "type": "Donation | null"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "logoUrl",
            "baseName": "logoUrl",
            "type": "string"
        },
        {
            "name": "nonprofitDescription",
            "baseName": "nonprofitDescription",
            "type": "string"
        },
        {
            "name": "nonprofitName",
            "baseName": "nonprofitName",
            "type": "string"
        },
        {
            "name": "nonprofitUrl",
            "baseName": "nonprofitUrl",
            "type": "string"
        },
        {
            "name": "termsAndConditionsUrl",
            "baseName": "termsAndConditionsUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DonationCampaign.attributeTypeMap;
    }
}

