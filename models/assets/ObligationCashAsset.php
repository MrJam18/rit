<?php

namespace app\models\assets;

class ObligationCashAsset extends FinancialAsset
{
    public const CLASS_ID = 7;
    public string $basis_name;

    public function rules(): array
    {
        return array_merge(parent::rules(), [
           ['basis_name', 'string', 'min' => 3, 'max' => 255,],
        ]);
    }

    public function attributeLabels(): array
    {
        return array_merge(parent::attributeLabels(), [
           'basis_name' => 'Основание актива'
        ]);
    }
}