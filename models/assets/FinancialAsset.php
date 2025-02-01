<?php

namespace app\models\assets;

abstract class FinancialAsset extends Asset
{

    public function rules(): array
    {
        return array_merge(parent::rules(), [
            ['currency_id', 'required'],
        ]);
    }

    public function attributeLabels(): array
    {
        return array_merge(parent::attributeLabels(), [
           'amount' => 'Общая сумма',
        ]);
    }
}