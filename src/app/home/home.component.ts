import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { LocalStorage } from 'src/models/enums/local-storage.enum';
import { LocalStorageService } from 'src/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public animated = false;
  public theme: any;
  localStorageEnum = LocalStorage
  @ViewChild('ball') ball!: ElementRef;
  public mouseX = 0;
  public mouseY = 0;

  public ballX = 0;
  public ballY = 0;

  public speed = 0.1;

  constructor(private renderer2: Renderer2, private localStorageService: LocalStorageService) { }
  ngOnInit(): void {
    
    
  }
  animate(): void {
    let distX = this.mouseX - this.ballX;
	  let distY = this.mouseY - this.ballY;
	
	// Find position of ball and some distance * speed
	  this.ballX = this.ballX + (distX * this.speed);
	  this.ballY = this.ballY + (distY * this.speed);

    this.renderer2.setStyle(this.ball.nativeElement,'left',this.ballX + "px")
    this.renderer2.setStyle(this.ball.nativeElement,'top',this.ballY + "px")

    window.requestAnimationFrame(this.animate.bind(this))

  }

  ngAfterViewInit(): void {
    this.animate();
    let mouseOverEvent$ = fromEvent<MouseEvent>(document, 'mousemove');
    mouseOverEvent$.subscribe((event: MouseEvent)=> {
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;
    })
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   

  }

  setNightMode(): void{
    this.localStorageService.set(this.localStorageEnum.theme, 'dark')
  }

  setLightMode(): void {
    this.localStorageService.set(this.localStorageEnum.theme, 'light')
  }
}
