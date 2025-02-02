<?php

namespace app\models\assets;

class CashBoxCashAsset extends FinancialAsset
{
    public const CLASS_ID = 2;
    public $cashbox_name = null;
    public function rules(): array
    {
        return array_merge(parent::rules(), [
           ['cashbox_name', 'required'],
           ['cashbox_name', 'string', 'max' => 255],
        ]);
    }

    public function attributeLabels(): array
    {
        return array_merge(parent::attributeLabels(), [
           'cashbox_name' => 'Название кассы'
        ]);
    }


}