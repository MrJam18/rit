export class Model
{
    static classId
    constructor(data) {
        for (let prop in this) {
            if(data[prop]) {
                this[prop] = data[prop];
            }
        }
    }
}