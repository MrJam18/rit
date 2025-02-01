<?php

namespace app\models\assets;

use app\models\Model;

class MaterialMeasurementUnit extends Model
{
    public const CLASS_ID = 6;
    public const UNIT_QUANTITY = 1;
    public const UNIT_SQUARE_METER = 2;
    public const UNIT_VOLUME = 3;
    public const UNIT_WEIGHT = 4;

    public const UNITS = [
        self::UNIT_QUANTITY,
        self::UNIT_SQUARE_METER,
        self::UNIT_VOLUME,
        self::UNIT_WEIGHT
    ];

    public const UNIT_NAMES = [
        self::UNIT_QUANTITY => 'Шт.',
        self::UNIT_SQUARE_METER => 'Кв. м.',
        self::UNIT_VOLUME => 'Объем',
        self::UNIT_WEIGHT => 'Вес'
    ];

}