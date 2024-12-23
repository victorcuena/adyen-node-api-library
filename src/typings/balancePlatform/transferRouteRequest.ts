/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Counterparty } from './counterparty';

export class TransferRouteRequest {
    /**
    * The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id). Required if `counterparty` is **transferInstrumentId**.
    */
    'balanceAccountId'?: string;
    /**
    * The unique identifier assigned to the balance platform associated with the account holder.
    */
    'balancePlatform': string;
    /**
    *  The type of transfer. Possible values:    - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account. 
    */
    'category': TransferRouteRequest.CategoryEnum;
    'counterparty'?: Counterparty | null;
    /**
    * The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or **NL**.  > Either `counterparty` or `country` field must be provided in a transfer route request.
    */
    'country'?: string;
    /**
    * The three-character ISO currency code of transfer. For example, **USD** or **EUR**.
    */
    'currency': string;
    /**
    * The list of priorities for the bank transfer. Priorities set the speed at which the transfer is sent and the fees that you have to pay. Multiple values can be provided. Possible values:  * **regular**: for normal, low-value transactions.  * **fast**: a faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.  * **wire**: the fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.  * **instant**: for instant funds transfers in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).  * **crossBorder**: for high-value transfers to a recipient in a different country.  * **internal**: for transfers to an Adyen-issued business bank account (by bank account number/IBAN).
    */
    'priorities'?: Array<TransferRouteRequest.PrioritiesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "balanceAccountId",
            "baseName": "balanceAccountId",
            "type": "string"
        },
        {
            "name": "balancePlatform",
            "baseName": "balancePlatform",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "TransferRouteRequest.CategoryEnum"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "Counterparty | null"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "priorities",
            "baseName": "priorities",
            "type": "Array<TransferRouteRequest.PrioritiesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return TransferRouteRequest.attributeTypeMap;
    }
}

export namespace TransferRouteRequest {
    export enum CategoryEnum {
        Bank = 'bank'
    }
    export enum PrioritiesEnum {
        CrossBorder = 'crossBorder',
        Fast = 'fast',
        Instant = 'instant',
        Internal = 'internal',
        Regular = 'regular',
        Wire = 'wire'
    }
}
