import {Asset} from "./Asset";

export class MaterialAsset extends Asset
{
    static classId = 5;
    initial_amount;
    final_amount;
    manufacturing_year;
    material_measurement_unit_id
}