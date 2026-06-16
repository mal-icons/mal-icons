import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-join-inner",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsJoinInner {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["ellipse",{"cx":"12","cy":"12","rx":"3","ry":"5.74"}],["path",{"d":"M9.04 16.87c-0.330.08-0.680.13-1.040.13-2.76 0-5-2.24-5-5s2.24-5 5-5c0.36 0 0.710.05 1.040.130.39-0.560.88-1.12 1.49-1.63C9.75 5.19 8.9 5 8 5c-3.86 0-7 3.14-7 7s3.14 7 7 7c0.9 0 1.75-0.19 2.53-0.5-0.61-0.51-1.1-1.07-1.49-1.63zM16 5c-0.9 0-1.750.19-2.530.50.610.51 1.1 1.07 1.49 1.630.33-0.080.68-0.13 1.04-0.13 2.76 0 5 2.24 5 5s-2.24 5-5 5c-0.36 0-0.71-0.05-1.04-0.13-0.390.56-0.88 1.12-1.49 1.630.780.31 1.630.5 2.530.5 3.86 0 7-3.14 7-7s-3.14-7-7-7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsJoinInner;
