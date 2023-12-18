import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ethihad-transport';
  isArabic: boolean = true;
  lang!: string ;


  constructor(private translateService: TranslateService) { }

  ngOnInit(){
    this.translate('en')
  }

  translate(lang:string) {
    this.isArabic = !this.isArabic
    this.translateService.use(lang)
  }
}
