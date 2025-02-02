<?php

namespace app\models\assets;

class IntangibleAsset extends NonMonetaryAsset
{
    public const CLASS_ID = 8;
    public $intangible_measurement_unit_id = null;

    public function rules(): array
    {
        return array_merge(parent::rules(), [
            [['quantity'], 'integer', 'min' => 1],
            [['quantity'], 'default', 'value' => null],
            [['intangible_measurement_unit_id'], 'in', 'range' => IntangibleMeasurementUnit::UNITS],
        ]);
    }

    public function attributeLabels(): array
    {
        return array_merge(parent::attributeLabels(), [
            'final_amount' => 'Остаточная балансовая стоимость',
            'amount' => 'Сумма актива',
            'intangible_measurement_unit_id' => 'Система измерения'
        ]);
    }
}