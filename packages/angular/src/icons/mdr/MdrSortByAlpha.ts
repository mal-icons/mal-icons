import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sort-by-alpha",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSortByAlpha {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.93 2.65c-0.2-0.2-0.51-0.2-0.71 0l-2.01 2.01h4.72l-2-2.01zm-0.7 18.7c0.20.20.510.20.71 0l1.98-1.98h-4.66l1.97 1.98zm-1.25-3.62c0.6 0 1.01-0.60.79-1.16L8.04 7.03a1.21 1.21 0 0 0-2.24 0l-3.74 9.53c-0.220.560.19 1.160.79 1.160.35 0 0.67-0.220.8-0.55l0.71-1.9h5.11l0.71 1.9c0.130.340.450.560.80.56zm-6.01-4.09 1.94-5.18 1.94 5.18H4.97zm16.08 2.5h-5.33l5.72-8.29c0.46-0.66-0.02-1.57-0.82-1.57h-6.48c-0.44 0-0.790.36-0.790.8v0.01c0 0.440.360.80.790.8h5.09l-5.73 8.28c-0.460.660.02 1.570.82 1.57h6.72c0.44 0 0.79-0.360.79-0.79a0.780.78 0 0 0-0.78-0.81z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSortByAlpha;
