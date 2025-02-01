import {Model} from "../Model";
import {IntangibleAsset} from "./IntangibleAsset";
import {BankCashAsset} from "./BankCashAsset";
import {CashBoxCashAsset} from "./CashBoxCashAsset";
import {MaterialAsset} from "./MaterialAsset";
import {ObligationCashAsset} from "./ObligationCashAsset";

export class Asset extends Model {
    id;
    name;
    amount;
    currency_id;

    static classIds = [
        1,
        CashBoxCashAsset.classId,
        ObligationCashAsset.classId,
        IntangibleAsset.classId,
        MaterialAsset.classId,

    ]

}