import {Asset} from "./Asset";

export class IntangibleAsset extends Asset
{
    static classId = 5;
    intangible_measurement_unit_id;
}