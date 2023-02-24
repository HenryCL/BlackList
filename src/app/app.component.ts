import { Component,ElementRef, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private elementRef: ElementRef){}
  title = 'fe-blacklist';

  ngOnInit(){
    const element = this.elementRef.nativeElement.querySelectorAll('.reveal');
    gsap.fromTo(element, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      }
    });
  }
  }
  





 
  
  
 

