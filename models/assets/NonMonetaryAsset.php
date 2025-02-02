<?php

namespace app\models\assets;

abstract class NonMonetaryAsset extends Asset
{
    public $additional_data = null;
    public $quantity = null;

    public function rules(): array
    {
        return array_merge(parent::rules(), [
           [['additional_data'], 'string'],
           [['quantity'], 'default', 'value' => '0'],
           [['quantity'], 'integer',],
        ]);
    }
    public function attributeLabels(): array
    {
        return array_merge(parent::attributeLabels(), [
            'additional_data' => 'Доп. информация',
            'quantity' => 'Количество',
        ]);
    }
}