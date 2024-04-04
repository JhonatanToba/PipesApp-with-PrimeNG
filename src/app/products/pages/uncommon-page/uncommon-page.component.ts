import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect
  public name: string = 'Jhonatan';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = 'Karen';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia']
  public clietsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas en espera',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Jhonatan',
    age: 25,
    addres: 'Colombia'
  }

  //Asynpipe

  public myObservableTimer: Observable<number> = interval(2000)
  .pipe(
    tap( value => console.log('tap', value)
    )
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  })
}
