/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DeviceRenderOptions {
    /**
    * Supported SDK interface types. Allowed values: * native * html * both
    */
    'sdkInterface'?: DeviceRenderOptions.SdkInterfaceEnum;
    /**
    * UI types supported for displaying specific challenges. Allowed values: * text * singleSelect * outOfBand * otherHtml * multiSelect
    */
    'sdkUiType'?: Array<DeviceRenderOptions.SdkUiTypeEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sdkInterface",
            "baseName": "sdkInterface",
            "type": "DeviceRenderOptions.SdkInterfaceEnum"
        },
        {
            "name": "sdkUiType",
            "baseName": "sdkUiType",
            "type": "Array<DeviceRenderOptions.SdkUiTypeEnum>"
        }    ];

    static getAttributeTypeMap() {
        return DeviceRenderOptions.attributeTypeMap;
    }
}

export namespace DeviceRenderOptions {
    export enum SdkInterfaceEnum {
        Native = 'native',
        Html = 'html',
        Both = 'both'
    }
    export enum SdkUiTypeEnum {
        MultiSelect = 'multiSelect',
        OtherHtml = 'otherHtml',
        OutOfBand = 'outOfBand',
        SingleSelect = 'singleSelect',
        Text = 'text'
    }
}
