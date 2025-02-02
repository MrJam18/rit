<?php

namespace app\models\assets;

class MaterialAsset extends NonMonetaryAsset
{
    public $initial_amount = null;
    public $final_amount = null;
    public $manufacturing_year = null;
    public $material_measurement_unit_id = null;

    public const CLASS_ID = 5;

    public function rules(): array
    {
        return array_merge(parent::rules(), [
           [['initial_amount', 'final_amount'], 'number'],
           [['manufacturing_year'], 'date', 'format' => 'yyyy'],
           [['material_measurement_unit_id'], 'in', 'range' => MaterialMeasurementUnit::UNITS],
           [['quantity', 'material_measurement_unit_id'], 'required'],
        ]);
    }

    public function attributeLabels(): array
    {
        return array_merge(parent::attributeLabels(), [
            'initial_amount' => 'Начальная стоимость',
            'final_amount' => 'Остаточная стоимость',
            'amount' => 'Оценочная стоимость',
            'quantity' => 'Количество',
            'material_measurement_unit_id' => 'Система измерения',
            'manufacturing_year' => 'Год производства'
        ]);
    }
}