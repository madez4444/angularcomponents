import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'material-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  widthsize = 16.667;
  totalcounter = 0;

  _filter: any = {
    searchbar: '',
    singleoption: 'allprod',
    fromdate: null,
    todate: null,
    multioption: {
      pending: false,
      inprogress: false,
      completed: false
    }
  };

  _datalist: any = [];
  @Input() set _data(data: any) { this._datalist = data; }
  //_filterset: any = [];
  //@Input() set _filters(data: any) { this._filterset = data; }

  constructor() { }

  _countdata(){
    var display = false;
    for(let data of this._datalist){
      display = this._filterdata(data) == true ? true : display;
    }
    return display;
  }

  _filterdata(data: any) {
    var display = true;

    //Filtro Multiple
    var multineeded = false;
    var multikeys = [];
    for (let key of Object.keys(this._filter.multioption)) {
      if (this._filter.multioption[key] == true) {
        multineeded = true;
        multikeys.push(key);
      }
    }
    if(multineeded){
      display = multikeys.indexOf(data.status.key)>=0 ? true : false;
    }

    //Filtro Individual
    if(this._filter.singleoption != "allprod"){
      display = data.productLine.key == this._filter.singleoption ? display : false;
    }

    //Barra de Busqueda
    if(this._filter.searchbar != ''){
      display = data.orderNumber.toString().indexOf(this._filter.searchbar)>=0 ? display : false;
    }

    //FromDate
    if(this._filter.fromdate != null){
      display = data.dateRequested.getTime() >= this._filter.fromdate.getTime() ? display : false;
    }

    //ToDate
    if(this._filter.todate != null){
      display = data.dateRequested.getTime() <= this._filter.todate.getTime() ? display : false;
    }

    return display;
  }
}
