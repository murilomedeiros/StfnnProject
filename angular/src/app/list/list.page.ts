import { Component } from '@angular/core';
import { legends } from '../names/nameslist';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  legends: Array<string> = [];

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.legends = legends;

  }
}
