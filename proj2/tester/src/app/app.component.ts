import { Component } from '@angular/core';
import {Dating} from './dating'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics=['HTML','CSS','js','ts'];

  //userModel = new Dating('tearz','tmosh@gmail.com',466546,'','morning',true);

  arry=['money','cars','woman'];
  taskinput='';

  addservise(event:any){
    this.taskinput =event.target.value;
  }

  clickserve(){
    this.arry.push(this.taskinput);
  }


}
