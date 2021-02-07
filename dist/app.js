"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "Max" }, { age: 30 });
console.log(mergeObj.age);
function countAndDescribe(element) {
    let descriptionText = "値がありません";
    if (element.length > 0) {
        descriptionText = '値は' + element.length + '個です';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("otu"));
function extractAndConvert(obj, key) {
    return 'Value' + obj[key];
}
extractAndConvert({ name: "Max" }, 'name');
class DataStrage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStrage = new DataStrage();
textStrage.addItem('data1');
textStrage.addItem('data2');
textStrage.removeItem('data1');
console.log(textStrage.getItems());
const numberStrage = new DataStrage();
const objStrage = new DataStrage();
objStrage.addItem({ name: "Max" });
objStrage.addItem({ name: "Manu" });
// ..
objStrage.removeItem({ name: "Max" });
console.log(objStrage.getItems());
//# sourceMappingURL=app.js.map