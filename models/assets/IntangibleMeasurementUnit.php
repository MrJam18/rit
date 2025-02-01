<?php

namespace app\models\assets;

use app\models\Model;

class IntangibleMeasurementUnit extends Model
{
    public const CLASS_ID = 4;
    public const UNIT_QUANTITY = 1;
    public const UNIT_HUMANS = 2;
    public const UNIT_TERM = 3;

    public const UNITS = [
        self::UNIT_QUANTITY,
        self::UNIT_HUMANS,
        self::UNIT_TERM
    ];
    public const UNIT_NAMES = [
      self::UNIT_QUANTITY => 'Шт.',
      self::UNIT_HUMANS => 'Люди',
      self::UNIT_TERM => 'Срок'
    ];

}