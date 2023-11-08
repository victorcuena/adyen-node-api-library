/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class UtilityRequest {
    /**
    * The list of origin domains, for which origin keys are requested.
    */
    'originDomains': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "originDomains",
            "baseName": "originDomains",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return UtilityRequest.attributeTypeMap;
    }
}

