import { Component } from '@angular/core';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss']
})
export class MainviewComponent {
  constructor() { }

  /*filters: any = [
    {
      type: 'multioption',
      options: [
        { key: 'pending', displayName: 'Pending' },
        { key: 'inprogress', displayName: 'In Progress' },
        { key: 'completed', displayName: 'Completed' }]
    }, {
      type: 'singleoption',
      options: [
        { key: 'readymix', displayName: 'Ready-Mix' },
        { key: 'cement', displayName: 'Cement' },
        { key: 'agreggates', displayName: 'Aggregates' }
      ]
    }, {
      type: 'daterange',
      fromdate: null,
      todate: null
    }
  ];*/

  dataList: any = [
    {
      orderNumber: '3301',
      product: "1-200-2-C-28-12-1-3-00",
      quantity: "12 m3",
      dateRequested: new Date(1666238400000),
      status: {
        key: "inprogress",
        displayName: "In Progress"
      },
      productLine: {
        key: "readymix",
        displayName: "Ready-Mix"
      }
    }, {
      orderNumber: '3305',
      product: "Gris CPC 30 R Monterrey Extra 50Kg.",
      quantity: "10 TN",
      dateRequested: new Date(1665374400000),
      status: {
        key: "pending",
        displayName: "Pending"
      },
      productLine: {
        key: "cement",
        displayName: "Cement"
      }
    }, {
      orderNumber: '3290',
      product: "Arena Triturada Caliza Malla 4",
      quantity: "2 TN",
      dateRequested: new Date(1664424000000),
      status: {
        key: "pending",
        displayName: "Pending"
      },
      productLine: {
        key: "agreggates",
        displayName: "Aggregates"
      }
    }, {
      orderNumber: '3295',
      product: "Gris CPC30R Tolteca Extra 50Kg",
      quantity: "12 TN",
      dateRequested: new Date(1649131200000),
      status: {
        key: "completed",
        displayName: "Completed"
      },
      productLine: {
        key: "cement",
        displayName: "Cement"
      }
    }, {
      orderNumber: '3184',
      product: "Arena Triturada Caliza Malla 4",
      quantity: "5 TN",
      dateRequested: new Date(1649131200000),
      status: {
        key: "completed",
        displayName: "Completed"
      },
      productLine: {
        key: "agreggatest",
        displayName: "Aggregates"
      }
    }, {
      orderNumber: '2994',
      product: "1-200-2-C-28-14-1-3-000",
      quantity: "15.5m3",
      dateRequested: new Date(1649131200000),
      status: {
        key: "completed",
        displayName: "Completed"
      },
      productLine: {
        key: "readymix",
        displayName: "Ready-Mix"
      }
    }
  ];

}
