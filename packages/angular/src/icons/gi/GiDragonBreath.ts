import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-dragon-breath",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDragonBreath {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M15.33 13v61.32c76.7 54.19 157.85 147.57 64.83 125.57 57.12 55.07 104.12 26.79 174.04 135.49 30.42 47.3 7.47 80.54-29.78 90.52-47.88 12.83-114.35-30.45-57.82-54.31-59.3-1.45-66.95 47.98-38.73 80.24-27.93-9.63-46.01-34.31-43.03-60.6-36.04 48.28-5.36 93.28 54.31 102.43h357.42v-344.57c-15.75-70.31-94.88-87.76-103.37-3.5 14.61-36.42 50.96-20.62 84.1 18.69-11.28-7.5-24.24-11.49-36.21-11.1-19.730.65-37.36 12.09-41.47 36.79 55.9-46.11 84.63 34.72 61.74 76.88-24.74 45.58-94.89-20.47-95.03-75.71-27.97 31.24-7.81 108.3 52.37 122.55C304.64 301.29 342.74 182.92 295.65 157.84 324.38 285.47 121.73 62.26 66.14 13h-50.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDragonBreath;
