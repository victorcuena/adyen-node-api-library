/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Links } from './links';
import { Transaction } from './transaction';

export class TransactionSearchResponse {
    '_links'?: Links | null;
    /**
    * Contains the transactions that match the query parameters.
    */
    'data'?: Array<Transaction>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "_links",
            "baseName": "_links",
            "type": "Links | null"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Transaction>"
        }    ];

    static getAttributeTypeMap() {
        return TransactionSearchResponse.attributeTypeMap;
    }
}

