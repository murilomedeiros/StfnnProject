import { Component } from '@angular/core';
import { legends } from '../names/nameslist';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  legends: Array<string> = [];

  ngOnInit() {
    this.legends = legends;

  }

  reorderItems(indexes) {
    const element = this.legends[indexes.from];
    this.legends.splice(indexes.from, 1);
    this.legends.splice(indexes.to, 0, element);
  }
}
