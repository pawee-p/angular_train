import { Component, OnInit } from '@angular/core';
import { Demo } from '../shared/demo';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  _data: Demo = {
      code : '',
      name : ''
  };

  mode = '';
  code = '';

  private itemsCollection: AngularFirestoreCollection<Demo>;

  constructor(
    private _fireStore: AngularFirestore,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {

    activeRoute.params.subscribe( (param) => {
      this.mode = param.mode ? param.mode : 'ADD';
      this.code = param.code ? param.code : '';
    });
    // this._data = new Demo();
    this._data.code = '00';
    this._data.name = '';
    this.itemsCollection = _fireStore.collection('items');

   }

  ngOnInit() {
    if (this.mode === 'EDIT') {
      this._fireStore.collection('items').doc(this.code).valueChanges().subscribe( (data: Demo) => {
        this._data = data;
      });
    }
  }

  onFormSubmit() {


    this._fireStore.collection('items').doc(this._data.code).set(this._data).then( (resp) => {
      this.router.navigate(['admin', 'demo-list']);
      // console.log('sucess');
    }).catch( (err) => {
        console.log(err);
    } );
  }

}
