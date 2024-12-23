/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class CheckoutOrderResponse {
    'amount'?: Amount | null;
    /**
    * The expiry date for the order.
    */
    'expiresAt'?: string;
    /**
    * The encrypted order data.
    */
    'orderData'?: string;
    /**
    * The `pspReference` that belongs to the order.
    */
    'pspReference': string;
    /**
    * The merchant reference for the order.
    */
    'reference'?: string;
    'remainingAmount'?: Amount | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount | null"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string"
        },
        {
            "name": "orderData",
            "baseName": "orderData",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "remainingAmount",
            "baseName": "remainingAmount",
            "type": "Amount | null"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutOrderResponse.attributeTypeMap;
    }
}

