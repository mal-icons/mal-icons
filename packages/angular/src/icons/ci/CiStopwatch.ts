import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-stopwatch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiStopwatch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.93,7.83c1.23,1.39 1.97,3.22 1.97,5.22c0,4.36 -3.54,7.9 -7.89,7.9c-4.36,0 -7.9,-3.54 -7.9,-7.89c0,-4.19 3.27,-7.62 7.4,-7.88l0,-1.1l-1.59,0c-0.64,0 -0.64,-1 0,-1l4.17,0c0.65,0 0.64,1 0,1l-1.59,0l0,1.1c1.8,0.11 3.44,0.83 4.72,1.96c0.38,-0.38 0.76,-0.76 1.14,-1.13c0.2,-0.2 0.51,-0.18 0.71,0c0.2,0.18 0.19,0.52 0,0.71l-1.13,1.14Zm0.97,5.22c0,-3.8 -3.09,-6.89 -6.89,-6.89c-3.81,0 -6.9,3.09 -6.9,6.9c0,3.81 3.09,6.9 6.9,6.9c3.81,0 6.9,-3.09 6.9,-6.89Zm-6.39,0c0,0.65 -1,0.64 -1,0l0,-4.7c0,-0.64 1,-0.64 1,0l0,4.7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiStopwatch;
