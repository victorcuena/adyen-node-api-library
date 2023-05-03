/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CapitalBalance {
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
    */
    'currency': string;
    /**
    * Fee amount.
    */
    'fee': number;
    /**
    * Principal amount.
    */
    'principal': number;
    /**
    * Total amount. A sum of principal amount and fee amount.
    */
    'total': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "number"
        },
        {
            "name": "principal",
            "baseName": "principal",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CapitalBalance.attributeTypeMap;
    }
}

