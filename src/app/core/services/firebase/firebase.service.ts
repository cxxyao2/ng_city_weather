import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public fireService: AngularFirestore) {}

  addCity(name: string) {
    return this.fireService
      .collection('City')
      .add({ name, added: new Date() });
  }

  // collection name : City
  // get an city id: snap.payload.doc.id
  getCities() {
    return this.fireService
      .collection('City')
      .snapshotChanges()
      .pipe(
        map((snaps) =>
          snaps.map((snap: any) => {
            return {
              id: snap.payload.doc.id,
              ...(snap.payload.doc.data() as {}),
            };
          })
        ),
        first()
      );
  }

  getCity(id: string) {
    return this.fireService.doc('City/' + id);
  }

  deleteCity(id: string) {
    this.fireService.doc('City/' + id).delete();
  }
}
