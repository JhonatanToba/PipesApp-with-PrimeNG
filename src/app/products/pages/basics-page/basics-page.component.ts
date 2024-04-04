import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'jhonatan';
  public nameUpper: string = 'JHONATAN';
  public fullName: string = 'jHoNaTaN tObA';

  public customDate: Date = new Date();

}
