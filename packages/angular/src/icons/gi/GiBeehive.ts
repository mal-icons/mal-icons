import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-beehive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBeehive {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 21.33L75.17 136.41l-7.59 4.83 9.66 15.19 7.59-4.83L256 42.67l171.17 108.93 7.59 4.83 9.66-15.19-7.59-4.83L256 21.33zm-144.91 5.74l-8.48 13.57 15.26 9.54 8.49-13.56-15.26-9.55zM72.21 44.02L58.96 56.2l10.83 11.78L83.04 55.8 72.21 44.02zm305.13 10.82l-17.86 2.28 2.02 15.87 17.86-2.28-2.02-15.87zM256 58.67l-148.13 94.26L99.34 183h312.99l-8.97-30.55L256 58.67zm0 43.85l57 19V169H199v-47.49l57-19zm0 18.97l-39 13V151h78v-16.51l-39-13zm-84.83 18.72l7.36 14.21-15.98 8.28-7.36-14.2 15.98-8.28zm266.72 45.75l-7 16.59 14.74 6.22 7-16.58-14.74-6.22zM120.26 201l-17.07 69h312.99l-17.14-69H120.26zM151 231h210v18H151v-18zm-93.36 40.19l-17.58 3.86 3.43 15.63 17.58-3.86-3.43-15.63zM122.19 288l-20.92 78H417.79l-21-78H122.19zm203.71 9.68l14.82 10.22-9.09 13.17-14.82-10.22 9.09-13.17zM151 327h210v18H151v-18zm302.44 18.64l-9.09 13.17 14.81 10.22 9.09-13.17-14.82-10.22zM122.19 384l-20.92 78H417.79l-21-78H122.19zm103.68 3.21l8.49 13.56-15.25 9.55-8.49-13.56 15.26-9.55zM77.65 398.65l-6.74 14.51 16.32 7.59 6.74-14.51-16.32-7.59zm303.140.82l7.31 14.23-16.01 8.23-7.31-14.23 16.01-8.22zM151 423h210v18H151v-18zm-23 57v16h48v-16h-48zm208 0v16h48v-16h-48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBeehive;
