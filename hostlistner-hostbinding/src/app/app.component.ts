import {
  Component,
  HostBinding,
  HostListener,
  ElementRef,
  Renderer2,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  // border: string;
  constructor(private el: ElementRef, private rendrer: Renderer2) {}
  title = "hostlistner-hostbinding";

  @HostBinding("style.border") border: string;

  @HostListener("click") click() {
    this.changeColor("blue");
    this.border = "10px solid yellow";
  }

  @HostListener("document:click", ["$event"])
  onKeyUp(ev: KeyboardEvent) {
    // do something meaningful with it
    console.log(`The user just pressed ${ev.type}!`);
  }

  changeColor(color: string) {
    this.rendrer.setStyle(this.el.nativeElement, "background-color", color);
  }
}
