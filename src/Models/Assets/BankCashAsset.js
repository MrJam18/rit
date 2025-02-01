
import {Asset} from "./Asset";

export class BankCashAsset extends Asset
{
        static classId = 1;

        bank_name;
        current_account;
}