/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';
import { Card } from './card';
import { Name } from './name';
import { SubMerchant } from './subMerchant';

export class FundDestination {
    /**
    * Bank Account Number of the recipient
    */
    'IBAN'?: string;
    /**
    * a map of name/value pairs for passing in additional/industry-specific data
    */
    'additionalData'?: { [key: string]: string; };
    'billingAddress'?: Address | null;
    'card'?: Card | null;
    /**
    * The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.
    */
    'selectedRecurringDetailReference'?: string;
    /**
    * the email address of the person
    */
    'shopperEmail'?: string;
    'shopperName'?: Name | null;
    /**
    * Required for recurring payments.  Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters. > Your reference must not include personally identifiable information (PII), for example name or email address.
    */
    'shopperReference'?: string;
    'subMerchant'?: SubMerchant | null;
    /**
    * the telephone number of the person
    */
    'telephoneNumber'?: string;
    /**
    * The purpose of a digital wallet transaction.
    */
    'walletPurpose'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "IBAN",
            "baseName": "IBAN",
            "type": "string"
        },
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address | null"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card | null"
        },
        {
            "name": "selectedRecurringDetailReference",
            "baseName": "selectedRecurringDetailReference",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "Name | null"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "subMerchant",
            "baseName": "subMerchant",
            "type": "SubMerchant | null"
        },
        {
            "name": "telephoneNumber",
            "baseName": "telephoneNumber",
            "type": "string"
        },
        {
            "name": "walletPurpose",
            "baseName": "walletPurpose",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FundDestination.attributeTypeMap;
    }
}

