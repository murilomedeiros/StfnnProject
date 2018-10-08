import { Component } from '@angular/core';
import { legends } from '../names/nameslist';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  legends: Array<string> = [];
  searchInput: string;
  results = [];

  ngOnInit() {
    this.legends = legends;
  }

  onSearch() {
    if (this.searchInput) {
      this.results = this.legends.filter(legend =>
        legend.substring(0, this.searchInput.length).toUpperCase().includes(this.searchInput.toUpperCase()));
    } else {
      this.results = [];
    }
  }
}
