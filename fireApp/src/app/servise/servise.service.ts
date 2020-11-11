import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class ServiseService {

  constructor(private fireConnect: AngularFirestore) { }

  Create_emp(emplo) { //Create
    this.fireConnect.collection('employees').add(emplo).then(() => {

      alert("employee added");

    }).catch(err => {
      alert(err.message + " " + "not working");
    });
  }

  get_emp(){//read

    return this.fireConnect.collection('employees').snapshotChanges();

  }

  delete_emp(_key) {  //Delete

    this.fireConnect.collection('employees').doc(_key).delete().then(()=>{

      alert('item deleted');
    }).catch(err=>{

      alert(err.message+ "error");

    });

  }

  updata_emp(_key) {  //Delete

    this.fireConnect.collection('employees').doc(_key.key).update(_key).then(()=>{

      alert("updated");
    })

  }

}
