/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { SourceOfFunds } from './sourceOfFunds';
import { WebData } from './webData';
import { WebDataExemption } from './webDataExemption';

export class BusinessLineInfoUpdate {
    /**
    * A code that represents the industry of your legal entity. For example, **4431A** for computer software stores.
    */
    'industryCode'?: string;
    /**
    * A list of channels where goods or services are sold.  Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.  Required only in combination with the `service` **paymentProcessing**.
    */
    'salesChannels'?: Array<string>;
    'sourceOfFunds'?: SourceOfFunds | null;
    /**
    * List of website URLs where your user\'s goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.
    */
    'webData'?: Array<WebData>;
    'webDataExemption'?: WebDataExemption | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "industryCode",
            "baseName": "industryCode",
            "type": "string"
        },
        {
            "name": "salesChannels",
            "baseName": "salesChannels",
            "type": "Array<string>"
        },
        {
            "name": "sourceOfFunds",
            "baseName": "sourceOfFunds",
            "type": "SourceOfFunds | null"
        },
        {
            "name": "webData",
            "baseName": "webData",
            "type": "Array<WebData>"
        },
        {
            "name": "webDataExemption",
            "baseName": "webDataExemption",
            "type": "WebDataExemption | null"
        }    ];

    static getAttributeTypeMap() {
        return BusinessLineInfoUpdate.attributeTypeMap;
    }
}

