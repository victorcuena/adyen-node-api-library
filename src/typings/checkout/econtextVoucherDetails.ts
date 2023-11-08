/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class EcontextVoucherDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The shopper\'s first name.
    */
    'firstName': string;
    /**
    * The shopper\'s last name.
    */
    'lastName': string;
    /**
    * The shopper\'s email.
    */
    'shopperEmail': string;
    /**
    * The shopper\'s contact number. It must have an international number format, for example **+31 20 779 1846**. Formats like **+31 (0)20 779 1846** or **0031 20 779 1846** are not accepted.
    */
    'telephoneNumber': string;
    /**
    * **econtextvoucher**
    */
    'type': EcontextVoucherDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "telephoneNumber",
            "baseName": "telephoneNumber",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EcontextVoucherDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return EcontextVoucherDetails.attributeTypeMap;
    }
}

export namespace EcontextVoucherDetails {
    export enum TypeEnum {
        Seveneleven = 'econtext_seveneleven',
        Stores = 'econtext_stores'
    }
}
