<?php

namespace app\models\assets;

use app\models\Model;

class Currency extends Model
{
    const CLASS_ID = 10;
    public const CURRENCY_RUB = 1;
    public const CURRENCY_EUR = 2;
    public const CURRENCY_GBP = 3;

    public const CURRENCY_USD = 4;
    public const CURRENCY_JPY = 5;

    public const CURRENCIES = [
        self::CURRENCY_RUB,
        self::CURRENCY_EUR,
        self::CURRENCY_GBP,
        self::CURRENCY_USD,
        self::CURRENCY_JPY,
    ];

    public const CURRENCY_NAMES = [
            self::CURRENCY_RUB => 'РУБ.',
            self::CURRENCY_EUR => 'EUR',
            self::CURRENCY_GBP => 'GBP',
            self::CURRENCY_USD => 'USD',
            self::CURRENCY_JPY => 'JPY',
        ];
}