import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-keyboard",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiKeyboard {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M247 21.07c0 10.51 7.18 18.17 14.71 23.41 7.53 5.25 16.41 9.2 24.7 13.15 8.29 3.95 15.95 7.94 20.33 11.66 4.38 3.72 5.23 5.25 4.46 8.82-0.5 2.32-1.22 3.32-2.61 4.46-1.4 1.15-3.77 2.29-7.15 3.11-6.77 1.64-17.08 1.78-27.94 1.72-10.86-0.05-22.27-0.27-32.76 1.98-10.49 2.25-21.3 8.17-25.25 19.7-2.59 7.55-0.24 15.34 3.37 20.8 3.61 5.46 8.33 9.71 12.86 13.7 3 2.64 5.89 5.13 8.36 7.42h22.88c-1.57-3.35-3.86-6.22-6.17-8.75-4.14-4.54-8.92-8.44-13.17-12.18-4.25-3.74-7.92-7.36-9.73-10.1-1.81-2.74-1.9-3.5-1.37-5.04 1.52-4.42 4.57-6.35 12-7.94 7.43-1.59 18.01-1.63 28.9-1.58 10.890.06 22.090.24 32.27-2.23 5.09-1.23 10.06-3.18 14.32-6.68 4.26-3.49 7.53-8.68 8.8-14.61 2.28-10.61-3.36-20.33-10.41-26.31-7.05-5.99-15.76-10.15-24.24-14.18-8.47-4.04-16.73-7.9-22.15-11.67-5.42-3.77-7-6.34-7-8.64h-18zM41 169v174h430V169H41zm7 14h16v18H48v-18zm32 0h16v18H80v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm48 0h48v18h-48v-18zm96 0h32v18h-32v-18zM48 215h32v18H48v-18zm48 0h16v18H96v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h32v18h-32v-18zm48 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm-127.87 25h18v57h-25v-18h7v-39zM48 247h16v18H48v-18zm32 0h16v18H80v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm96 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm-96 16h16v18h-16v-18zM48 279h32v18H48v-18zm48 0h16v18H96v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm112 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zM48 311h16v18H48v-18zm32 0h16v18H80v-18zm32 0h144v18H112v-18zm160 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h16v18h-16v-18zm32 0h48v18h-48v-18zm64 0h16v18h-16v-18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiKeyboard;
