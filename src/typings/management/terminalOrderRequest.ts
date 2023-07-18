/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { OrderItem } from './orderItem';

export class TerminalOrderRequest {
    /**
    * The identification of the billing entity to use for the order.
    */
    'billingEntityId'?: string;
    /**
    * The merchant-defined purchase order reference.
    */
    'customerOrderReference'?: string;
    /**
    * The products included in the order.
    */
    'items'?: Array<OrderItem>;
    /**
    * Type of order
    */
    'orderType'?: string;
    /**
    * The identification of the shipping location to use for the order.
    */
    'shippingLocationId'?: string;
    /**
    * The tax number of the billing entity.
    */
    'taxId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingEntityId",
            "baseName": "billingEntityId",
            "type": "string"
        },
        {
            "name": "customerOrderReference",
            "baseName": "customerOrderReference",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<OrderItem>"
        },
        {
            "name": "orderType",
            "baseName": "orderType",
            "type": "string"
        },
        {
            "name": "shippingLocationId",
            "baseName": "shippingLocationId",
            "type": "string"
        },
        {
            "name": "taxId",
            "baseName": "taxId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TerminalOrderRequest.attributeTypeMap;
    }
}

