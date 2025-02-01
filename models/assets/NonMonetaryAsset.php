<?php

namespace app\models\assets;

abstract class NonMonetaryAsset extends Asset
{
    public string $additional_data;
    public int $quantity = 0;

    public function rules(): array
    {
        return array_merge(parent::rules(), [
           [['additional_data'], 'string'],
        ]);
    }
    public function attributeLabels(): array
    {
        return array_merge(parent::attributeLabels(), [
            'additional_data' => 'Доп. информация',
            'quantity' => 'Единица измерения',
        ]);
    }
}