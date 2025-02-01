<?php

namespace app\models\assets;

class MaterialAsset extends NonMonetaryAsset
{
    public float $initial_amount;
    public float $final_amount;
    public int $manufacturing_year;
    public int $material_measurement_unit_id;
    public int $quantity;

    public const CLASS_ID = 5;

    public function rules(): array
    {
        return array_merge(parent::rules(), [
           [['initial_amount', 'final_amount'], 'number'],
           [['manufacturing_year'], 'date', 'format' => 'yyyy'],
           [['quantity'], 'integer', 'min' => 1],
           [['material_measurement_unit_id'], 'in', 'range' => MaterialMeasurementUnit::UNITS],
           [['quantity', 'material_measurement_unit_id'], 'required'],
        ]);
    }

    public function attributeLabels(): array
    {
        return array_merge(parent::attributeLabels(), [
            'initial_amount' => 'Начальная балансовая стоимость',
            'final_amount' => 'Остаточная балансовая стоимость',
            'amount' => 'Оценочная стоимость',
            'quantity' => 'Единица измерения',
            'material_measurement_unit_id' => 'Система измерения'
        ]);
    }
}