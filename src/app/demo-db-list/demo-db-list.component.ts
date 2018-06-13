import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-db-list',
  templateUrl: './demo-db-list.component.html',
  styleUrls: ['./demo-db-list.component.css']
})
export class DemoDbListComponent implements OnInit {

  _data;
  constructor(private _afdatabase: AngularFireDatabase, private router: Router) { }

  ngOnInit() {
    this._data = this._afdatabase.list('items').valueChanges();
  }


  onAdd() {
    this.router.navigate(['admin', 'demo-db-form']);
  }

  onEdit(item) {
    this.router.navigate(['admin', 'demo-db-form', 'EDIT', item.code]);
  }

  onDelete(item) {

    this._afdatabase.object(`items/${item.code}`).remove().then( (resp) => {
      alert('delete success');
    });
  }
}
