<?php

namespace app\models\assets;

class BankCashAsset extends FinancialAsset
{
    public const CLASS_ID = 1;
    public $bank_name = null;
    public $current_account = null;

    public function rules(): array
    {
        return array_merge(parent::rules(), [
           ['bank_name', 'string', 'min' => 3],
           [['current_account'], 'string', 'min' => 10],
           [['bank_name', 'current_account'], 'required'],
        ]);
    }

    public function attributeLabels(): array
    {
        return array_merge(parent::attributeLabels(), [
            'bank_name' => 'Название банка',
            'current_account' => 'Расчетный счет',
        ]);
    }
}