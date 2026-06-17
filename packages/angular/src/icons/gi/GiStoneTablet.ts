import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-stone-tablet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiStoneTablet {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M206.36 24.53L23.98 171.57l0.090.37h-0.01l-5.7 124.04 131.68 82.55L245.66 492.14l63.94-8.59 109.81-109.59 72.77-35.450.95-70.24 1.19-50.51L327.75 104.63l-33.41 14.46-3.46 29.76-18.57-2.16 3.21-27.6-46.93-7.71-21.11 28.84-15.08-11.04 27.89-38.11 65.27 10.73-0.130.78 25.2-10.91-51.48-64.01-52.79-3.13zM40.6 218.89l117.91 74.13 49.07-9.7-14.14-13.71 13.01-13.42 39.75 38.55-71.94 14.22-18.92 50.84-117.82-73.86 3.08-67.05zm362.75 59.07l44.38 20.55 26.46-12.92-0.56 41.17-50.29 24.5 9.59-39.01-37.43-17.33 7.85-16.96zm-211.53 37.37l78.11 93-24.81 54.16-75.4-89.590.60.23 21.5-57.79zm218.4 11.03l-9.9 40.24-89.69 89.51 19.09-49.2 80.49-80.55zm-102.29 85.06l-21.9 56.44-24.31 3.27 26.12-57.01 20.1-2.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiStoneTablet;
