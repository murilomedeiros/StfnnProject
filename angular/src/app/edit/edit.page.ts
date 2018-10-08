import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
    selector: 'app-edit',
    templateUrl: 'edit.page.html',
    styleUrls: ['edit.page.scss']
})
export class EditPage {
    legends: Array<string> = [];
    editable: Array<boolean> = [];
    storeName: string;

    constructor() {
    }

    ngOnInit() {
        this.legends = legends;

    }

    makeEditable(index: number) {
        this.storeName = this.legends[index];
        this.editable[index] = !(this.editable[index]);
    }

    save(index: number, name: string) {
        this.legends[index] = this.storeName;
        this.editable[index] = !(this.editable[index]);
    }

    backup(event: any, index: number) {
        this.storeName = event;
    }
}


