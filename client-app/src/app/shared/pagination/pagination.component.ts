import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetProducts } from 'src/app/store/actions/products.action';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  public size: number = 8;
  public currentPage: number = 1;

  @Input() searchString: string;
  public count = [];

  constructor(
    private _store: Store<IAppState>,
    private connectionService: ConnectionService,
    public cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.connectionService.getLimit$.subscribe(data => {
      this.count = data > 1 ? (new Array(data)).fill(1).map((a,i)=>i+1) : [];
    });
  }


  public pagination(page) {
    this.currentPage = page;
    const params = {
      page: page,
      size: this.size
    }
    this._store.dispatch(new GetProducts(this.searchString || "", params))
 }

}
