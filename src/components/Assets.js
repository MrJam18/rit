import React from 'react';
import CashBankAsset from "./CashBankAsset";
import CashCashBoxAsset from "./CashCashBoxAsset";
import CashObligationAsset from "./CashObligationAsset";
import MaterialAsset from "./MateriallAsset";
import IntangibleAsset from "./IntangibleAsset";

function Assets({item, assetType, provider}) {
    switch (assetType) {
        case 1:
            return <CashBankAsset item={item} provider={provider}  />
        case 2:
            return <CashCashBoxAsset item={item} provider={provider} />
        case 7:
            return <CashObligationAsset item={item} provider={provider} />
        case 5:
            return <MaterialAsset item={item} provider={provider} />
        case 8:
            return <IntangibleAsset item={item} provider={provider} />
        default:
            return <></>
    }
}

export default Assets;