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

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.legends = legends;

  }

  makeEditable(index: number) {
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


