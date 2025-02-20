/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { SweepConfigurationV2 } from './sweepConfigurationV2';

export class SweepConfigurationNotificationData {
    /**
    * The unique identifier of the balance account for which the sweep was configured.
    */
    'accountId'?: string;
    /**
    * The unique identifier of the balance platform.
    */
    'balancePlatform'?: string;
    'sweep'?: SweepConfigurationV2 | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "balancePlatform",
            "baseName": "balancePlatform",
            "type": "string"
        },
        {
            "name": "sweep",
            "baseName": "sweep",
            "type": "SweepConfigurationV2 | null"
        }    ];

    static getAttributeTypeMap() {
        return SweepConfigurationNotificationData.attributeTypeMap;
    }
}

