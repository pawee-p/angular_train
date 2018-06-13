import { Component, OnInit } from '@angular/core';
import { AngularFireStorage} from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-demo-upload',
  templateUrl: './demo-upload.component.html',
  styleUrls: ['./demo-upload.component.css']
})
export class DemoUploadComponent implements OnInit {

  percent: Observable<number>;
  downloadURL: Observable<string>;
  constructor(private _afstorage: AngularFireStorage) { }

  ngOnInit() {
  }

  uploadFile(event) {

    const file = event.target.files[0];
    const filePath = `images/${file.name}`;
    const fileRef = this._afstorage.ref(filePath);
    const task = this._afstorage.upload(filePath, file);
    this.percent = task.percentageChanges();

    task.snapshotChanges().pipe(
      finalize( () => {
        this.downloadURL = fileRef.getDownloadURL();
      })
    ).subscribe();
  }
}
