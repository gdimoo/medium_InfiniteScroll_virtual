import { PaginationService } from './pagination.service';
import { Component, OnInit } from '@angular/core';
import { CatListServiceProvider } from './pagination.service.provider';

interface CatList {
  name: string;
  picUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ CatListServiceProvider ]
})

export class AppComponent implements OnInit {

  constructor(public page: PaginationService<Array<CatList>>) { }

  ngOnInit() {
    this.page.init('cats', 'name', { reverse: true, prepend: false })
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      console.log('more');
      this.page.more();
    }
  }
}
