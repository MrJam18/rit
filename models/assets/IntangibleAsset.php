<?php

namespace app\models\assets;

class IntangibleAsset extends NonMonetaryAsset
{
    public const CLASS_ID = 8;
    public int $intangible_measurement_unit_id;

    public function rules(): array
    {
        return array_merge(parent::rules(), [
            [['quantity'], 'integer', 'min' => 1],
            [['quantity'], 'default', 'value' => 0],
            [['intangible_measurement_unit_id'], 'in', 'range' => IntangibleMeasurementUnit::UNITS],
        ]);
    }

    public function attributeLabels(): array
    {
        return array_merge(parent::attributeLabels(), [
            'final_amount' => 'Остаточная балансовая стоимость',
            'amount' => 'Оценочная стоимость',
            'intangible_measurement_unit_id' => 'Система измерения'
        ]);
    }
}