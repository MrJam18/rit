<?php

namespace app\components;

use app\models\assets\BankCashAsset;
use app\models\assets\CashBoxCashAsset;
use app\models\assets\Currency;
use app\models\assets\IntangibleAsset;
use app\models\assets\IntangibleMeasurementUnit;
use app\models\assets\MaterialAsset;
use app\models\assets\MaterialMeasurementUnit;
use app\models\assets\ObligationCashAsset;
use app\models\Model;
use Faker\Factory;
use Faker\Generator;

class TestDataProvider
{
    private array $ids;
    private array $data;

    private Generator $faker;

    public function __construct()
    {
        $this->faker = Factory::create();
    }

    public function getData(): array
    {
        foreach(range(1, 10) as $i) {
            $this->addModelToData($this->createBankCashAsset());
            $this->addModelToData($this->createObligationCashAsset());
            $this->addModelToData($this->createCashboxCashAsset());
            $this->addModelToData($this->createMaterialAsset());
            $this->addModelToData($this->createIntangibleAsset());
        }
        $this->data[Currency::getClassId()] = $this->getIdNameData(Currency::CURRENCY_NAMES);
        $this->data[IntangibleMeasurementUnit::getClassId()] = $this->getIdNameData(IntangibleMeasurementUnit::UNIT_NAMES);
        $this->data[MaterialMeasurementUnit::getClassId()] = $this->getIdNameData(MaterialMeasurementUnit::UNIT_NAMES);
        return $this->data;
    }

    private function createBankCashAsset(): BankCashAsset
    {
        return new BankCashAsset(array_merge($this->getAssetMainData(BankCashAsset::getClassId()),[
            'bank_name' => $this->faker->company(),
            'current_account' => $this->faker->numerify('####################'),
        ]));
    }

    private function createCashboxCashAsset(): CashBoxCashAsset
    {
        return new CashBoxCashAsset(array_merge($this->getAssetMainData(CashBoxCashAsset::getClassId()),[
            'cashbox_name' => $this->faker->realText(),
        ]));
    }

    private function createObligationCashAsset(): ObligationCashAsset
    {
        return new ObligationCashAsset(array_merge($this->getAssetMainData(ObligationCashAsset::getClassId()), [
            'basis_name' => $this->faker->realText(),
        ]));
    }

    private function getIdNameData(array $data): array
    {
        $result = [];
        foreach ($data as $id => $name) {
            $result[] = [
                'id' => $id,
                'name' => $name,
            ];
        }
        return $result;
    }

    private function createMaterialAsset(): MaterialAsset
    {
        return new MaterialAsset(array_merge($this->getAssetMainData(MaterialAsset::getClassId()),[
            'initial_amount' => $this->randomMoney(),
            'final_amount' => $this->randomMoney(),
            'manufacturing_year' => $this->faker->year(),
            'quantity' => $this->faker->numberBetween(1, 15),
            'material_measurement_unit_id' => $this->faker->numberBetween(MaterialMeasurementUnit::UNIT_QUANTITY, MaterialMeasurementUnit::UNIT_WEIGHT),
            'additional_data' => '{}'
        ]));
    }

    private function createIntangibleAsset(): IntangibleAsset
    {
        return new IntangibleAsset(array_merge($this->getAssetMainData(IntangibleAsset::getClassId()), [
            'quantity' => $this->faker->numberBetween(1, 15),
            'intangible_measurement_unit_id' => $this->faker->numberBetween(IntangibleMeasurementUnit::UNIT_QUANTITY, IntangibleMeasurementUnit::UNIT_TERM),
            'additional_data' => '{}',
        ]));
    }

    private function getAssetMainData(int $classId): array
    {
        return [
            'id' => $this->generateId($classId),
            'name' => $this->faker->realText(),
            'amount' => $this->faker->randomFloat(2,100, 100000),
            'currency_id' => $this->faker->numberBetween(Currency::CURRENCY_RUB, Currency::CURRENCY_JPY),
        ];
    }

    private function randomMoney(): float
    {
        return $this->faker->randomFloat(2, 100, 100000);
    }

    private function generateId(int $classId): int
    {
        $id = $this->ids[$classId] ?? 0;
        $id++;
        $this->ids[$classId] = $id;
        return $id;
    }

    private function addModelToData(Model $model): void
    {
        if(!$model->validate()) {
            throw new \Exception(json_encode($model->errors));
        }
        $array = $this->data[$model::getClassId()] ?? [];
        $array[] = $model->toArray();
        $this->data[$model::getClassId()] = $array;
    }
}