import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('countAnimation', [
      state('initial', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      state('final', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('initial => final', animate('1000ms ease-in'))
    ])
  ]
})
export class AppComponent {
  @ViewChild('serviceSection') serviceSection!: ElementRef;
  @ViewChild('serviceAbout') serviceAbout!: ElementRef;
  @ViewChild('serviceContact') serviceContact!: ElementRef;
  @ViewChild('count') count!: ElementRef;

  isService: boolean = false;
  isHome: boolean = true;
  isAbout: boolean = false;
  isContact: boolean = false;

  title = 'Ethihad-transport';
  isArabic: boolean = true;
  lang!: string;
  isCount:boolean = false;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translate('en')
  }

  ngAfterViewInit() {
    window.addEventListener('scroll', this.onScroll, true);
  }
  
  translate(lang: string) {
    this.isArabic = !this.isArabic
    this.translateService.use(lang)
  }

  scrollToServices() {
    if (this.serviceSection) {
      const navbarHeight = 82;
      const offset = this.serviceSection.nativeElement.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      this.isService = true;
      this.isHome = false;
      this.isAbout = false;
      this.isContact = false;
    }
  }

  scrollToHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.isService = false;
    this.isHome = true;
    this.isAbout = false;
    this.isContact = false;
  }

  scrollToAbout() {
    if (this.serviceAbout) {
      const navbarHeight = 105;
      const offset = this.serviceAbout.nativeElement.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      this.isService = false;
      this.isHome = false;
      this.isAbout = true;
      this.isContact = false;
    }
  }

  scrollToContact() {
    if (this.serviceContact) {
      const navbarHeight = 0;
      const offset = this.serviceContact.nativeElement.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      this.isService = false;
      this.isHome = false;
      this.isAbout = false;
      this.isContact = true;
    }
  }

  onScroll = () => {
    const sectionAbout = this.serviceAbout.nativeElement.offsetTop - 180;
    const sectionServices = this.serviceSection.nativeElement.offsetTop - 140;
    const sectionContact = this.serviceContact.nativeElement.offsetTop - 100;
    const sectionCount = this.count.nativeElement.offsetTop - 480;
  
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition >= sectionAbout && scrollPosition < sectionCount) {
      this.isService = false;
      this.isHome = false;
      this.isAbout = true;
      this.isContact = false;
    } else if (scrollPosition >= sectionCount && scrollPosition < sectionServices) {
      if(!this.isCount){
        this.countStart();
      }
      this.isCount = true;
    } else if (scrollPosition >= sectionServices && scrollPosition < sectionContact) {
      this.isService = true;
      this.isHome = false;
      this.isAbout = false;
      this.isContact = false;
    } else if (scrollPosition >= sectionContact) {
      this.isService = false;
      this.isHome = false;
      this.isAbout = false;
      this.isContact = true;
    } else {
      this.isService = false;
      this.isHome = true;
      this.isAbout = false;
      this.isContact = false;
    }
  };
  
  
  expertise:number = 0;
  deliveryRate:number = 70;
  annuallyCovered:number = 0;
  customerRetention:number = 70;

  countStart(){
    const expertisecountstop:any = setInterval(()=>{
      this.expertise++;
      if(this.expertise == 10 )
      {
        clearInterval(expertisecountstop);
      }
  
    },100)
  
    const deliveryRatecountstop:any = setInterval(()=>{
      this.deliveryRate++;
      if(this.deliveryRate == 98 )
      {
        clearInterval(deliveryRatecountstop);
      }
  
    },50)
  
    const annuallyCoveredcountstop:any = setInterval(()=>{
      this.annuallyCovered++;
      if(this.annuallyCovered == 1 )
      {
        clearInterval(annuallyCoveredcountstop);
      }
  
    },100)
  
    const customerRetentioncountstop:any = setInterval(()=>{
      this.customerRetention++;
      if(this.customerRetention == 95 )
      {
        clearInterval(customerRetentioncountstop);
      }
  
    },50)
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll, true);
  }
}