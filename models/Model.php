<?php

namespace app\models;

abstract class Model extends \yii\base\Model
{
    /**
     * @throws \Exception
     */
    public static function getClassId(): int
    {
        if(defined(static::class . '::CLASS_ID')) {
            return static::CLASS_ID;
        }
        throw new \Exception('can not find class id');
    }
}