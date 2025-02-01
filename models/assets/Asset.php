<?php

namespace app\models\assets;

use app\models\Model;

abstract class Asset extends Model
{
    public int $id;
    public string $name;
    public float $amount;
    public int $currency_id;

    const CLASS_ID_TO_CLASS = [
        CashBoxCashAsset::CLASS_ID => CashBoxCashAsset::class,
        BankCashAsset::CLASS_ID => BankCashAsset::class,
        ObligationCashAsset::CLASS_ID => ObligationCashAsset::class,
        MaterialAsset::CLASS_ID => MaterialAsset::class,
        IntangibleAsset::CLASS_ID => IntangibleAsset::class,
    ];
    public function rules(): array
    {
        return [
            [['name', 'amount'], 'required'],
            [['name'], 'string', 'max' => 255],
            ['amount', 'double'],
            [['currency_id'], 'in', 'range' => Currency::CURRENCIES],
        ];
    }

    public function attributeLabels(): array
    {
        return [
            'id' => 'Номер',
            'name' => 'Имя Актива',
        ];
    }
}