// import {CashBoxCashAsset} from "../Models/Assets/CashBoxCashAsset";
// import {BankCashAsset} from "../Models/Assets/BankCashAsset";
// import {ObligationCashAsset} from "../Models/Assets/ObligationCashAsset";
// import {MaterialAsset} from "../Models/Assets/MaterialAsset";
// import {IntangibleAsset} from "../Models/Assets/IntangibleAsset";
// import {Currency} from "../Models/Currency";
// import {IntangibleMeasurementUnit} from "../Models/IntangibleMeasurementUnit";
// import {MaterialMeasurementUnit} from "../Models/MaterialMeasurementUnit";
// import {Asset} from "../Models/Assets/Asset";

export class DataProvider {
    data = {};
    ids;

    assetIds = [1,2,5,7,8];

    load(data) {
        for(let classId in data) {
            classId = Number(classId);
            if(!this.data[classId]) {
                this.data[classId] = {};
            }
            for(let classIdInData in data[classId]) {
                data[classId].forEach( (el) => {
                    if(!this.data[classId]) {
                        this.data[classId] = {};
                    }
                    this.data[classId][Number(el.id)] = el;
                });
            }

        }
    }


    getTableData()
    {
        let items = [];
        if(items) {
            this.assetIds.forEach((classId) => {
                for(let id in this.data[classId]) {
                    let model = this.data[classId][id];
                    items.push({
                        id: model.id,
                        name: model.name,
                        amount: model.amount,
                        classId: classId
                    });
                }
            });
            items.sort((a, b) => a.amount - b.amount);
        }
        return items;
    }

    getAssetTypes()
    {
        return [
            {
                id: 1,
                name: 'Банковский актив'
            },
            {
                id: 2,
                name: 'Кассовый актив'
            },
            {
                id: 7,
                name: 'Денежное обязательство'
            },
            {
                id: 5,
                name: 'Материальный актив'
            },
            {
                id: 8,
                name: 'Нематериальный актив'
            }
        ]
    }

    getCurrencies()
    {
        return this.objectToArray(this.data[10]);
    }
    getMaterialMeasurementUnits()
    {
        return this.objectToArray(this.data[6]);
    }
    getIntangibleMeasurementUnits()
    {
        return this.objectToArray(this.data[4]);
    }

    objectToArray(data)
    {
        let result = [];
        for (let prop in data) {
            result.push(data[prop]);
        }
        return result;
    }

    findItem(id, classId)
    {
        const classData = this.data[classId];
        if(classData && classData[id]) {
            let item = classData[id];
            item.classId = classId;
            return item;
        }

        return null;
    }

    updateItem(id, classId, item)
    {
        if(this.findItem(id, classId)) {
            this.data[classId][id] = item;
            return this.getTableData();
        }
    }

    removeItem(id, classId)
    {
        const item = this.findItem(id, classId);
        if(item) {
            delete this.data[classId][id];
            return this.getTableData();
        } else {
            return null;
        }
    }

    _createModelByClassId(classId) {

    }
}