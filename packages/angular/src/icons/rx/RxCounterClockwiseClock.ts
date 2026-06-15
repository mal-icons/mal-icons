import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-counter-clockwise-clock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxCounterClockwiseClock {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13.15 7.5C13.15 4.66 10.94 1.85 7.5 1.85C4.72 1.85 3.35 3.91 2.76 5H4.5C4.78 5 5 5.22 5 5.5C5 5.78 4.78 6 4.5 6H1.5C1.22 6 1 5.78 1 5.5V2.5C1 2.22 1.22 2 1.5 2C1.78 2 2 2.22 2 2.5V4.31C2.7 3.07 4.33 0.85 7.5 0.85C11.56 0.85 14.15 4.19 14.15 7.5C14.15 10.81 11.56 14.15 7.5 14.15C5.56 14.15 3.94 13.38 2.79 12.21C2.17 11.58 1.69 10.84 1.36 10.04C1.25 9.79 1.37 9.49 1.63 9.39C1.89 9.28 2.18 9.4 2.28 9.66C2.56 10.34 2.97 10.97 3.5 11.51C4.47 12.5 5.83 13.15 7.5 13.15C10.94 13.15 13.15 10.34 13.15 7.5ZM7.5 4C7.78 4 8 4.22 8 4.5V7.29L9.85 9.15C10.05 9.34 10.05 9.66 9.85 9.85C9.66 10.05 9.34 10.05 9.15 9.85L7.15 7.85C7.05 7.76 7 7.63 7 7.5V4.5C7 4.22 7.22 4 7.5 4Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxCounterClockwiseClock;
