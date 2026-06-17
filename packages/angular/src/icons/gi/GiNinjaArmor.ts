import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-ninja-armor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiNinjaArmor {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M325.41 32.18L222.56 237.88h13.71l13.36-13.36 6.36-6.36 19.73 19.73H346l74.95-179.87c-8.11-4.99-23.97-11.71-41.31-16.44-19.05-5.2-39.63-8.65-54.22-9.38zm-139.210.02c-14.580.77-34.95 4.21-53.84 9.36-17.34 4.73-33.2 11.46-41.31 16.45L166 237.88h36.44l38.72-77.44zm29.25 22.56l36.25 84.58 41.98-83.97c-26.95 5.75-51.08 5.56-78.23-0.61zM88.42 98.48l-43.69 65.54 65.88 39.53 15.24-15.24zm335.17 0l-37.43 89.83 15.24 15.24 65.88-39.53zM256 243.61l-20.42 20.42 20.42 30.63 20.42-30.63zM153 255.88v30h75.52l-16.1-24.15 5.85-5.85zm140.73 0l5.85 5.85-16.1 24.15H359v-30zm-129.12 48l-26.04 165.24c114.22 14.27 120.67 14.27 234.89 0l-26.04-165.24h-75.92L256 327.1l-15.48-23.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiNinjaArmor;
