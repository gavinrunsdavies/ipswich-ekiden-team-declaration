import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let FilterPipe = class FilterPipe {
    transform(value, input, searchableList) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
                let isTrue = false;
                for (let k in searchableList) {
                    if (el[searchableList[k]] && el[searchableList[k]].toString().toLowerCase().indexOf(input) > -1) {
                        isTrue = true;
                    }
                    if (isTrue) {
                        return el;
                    }
                }
            });
        }
        return value;
    }
};
FilterPipe = __decorate([
    Pipe({
        name: 'FilterPipe',
    })
], FilterPipe);
export { FilterPipe };
