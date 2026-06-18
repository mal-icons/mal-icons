import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-blazemeter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBlazemeter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.04 17.14c-0.26 0-0.35-0.13-0.32-0.35l1.7-9.57c0.03-0.220.16-0.350.42-0.35h3.58c2.4 0 3.580.74 3.58 2.24 0 0.61-0.16 1.15-0.48 1.6-0.320.48-0.770.8-1.340.990.380.10.740.320.960.670.260.320.380.770.38 1.28 0 1.22-0.42 2.08-1.25 2.66-0.830.54-1.950.83-3.330.83H15.04zm3.97-1.66c1.66 0 2.5-0.61 2.5-1.82 0-0.38-0.16-0.64-0.45-0.83-0.29-0.19-0.8-0.26-1.47-0.26h-2.08l-0.51 2.88h2.02v0.03zm0.77-4.38c1.47 0 2.18-0.54 2.18-1.66 0-0.35-0.13-0.58-0.42-0.74-0.29-0.16-0.74-0.22-1.34-0.22h-1.98l-0.48 2.62h2.05zm-6.88-0.26a0.610.61 0 0 0-0.61-0.61H0.61a0.610.61 0 1 0 0 1.22h11.65c0.35 0 0.64-0.260.64-0.61zm1.34-2.17a0.610.61 0 0 0-0.61-0.61H6.46a0.610.61 0 1 0 0 1.22h7.17c0.32 0 0.61-0.260.61-0.61zm-2.46 6.65a0.610.61 0 0 0-0.61-0.61H8.26a0.610.61 0 1 0 0 1.22h2.91c0.32 0 0.61-0.260.61-0.61zm-0.86-2.27a0.610.61 0 0 0-0.61-0.61H3.2a0.610.61 0 1 0 0 1.22h7.1a0.630.63 0 0 0 0.61-0.61z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBlazemeter;
