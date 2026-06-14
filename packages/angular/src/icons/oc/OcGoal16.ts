import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-goal-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcGoal16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.64 2.36h0l1.680.34c0.090.020.160.080.190.17a0.250.25 0 0 1-0.060.25l-1.37 1.37a0.880.88 0 0 1-0.620.26H12.31L9.45 7.61A1.5 1.5 0 1 1 6.5 8a1.5 1.5 0 0 1 1.89-1.45l2.86-2.86V2.55c0-0.230.09-0.450.26-0.62L12.880.56a0.250.25 0 0 1 0.25-0.06c0.090.030.160.10.170.19Z"}],["path",{"d":"M2 8a6 6 0 1 0 11.77-1.660.750.75 0 1 1 1.44-0.41 7.5 7.5 0 0 1-12.51 7.37A7.5 7.5 0 0 1 10.070.79a0.750.75 0 0 1-0.41 1.44A6 6 0 0 0 2 8Z"}],["path",{"d":"M5 8a3 3 0 0 0 4.7 2.48 3 3 0 0 0 1.28-2.830.750.75 0 0 1 1.05-0.780.750.75 0 0 1 0.450.61A4.5 4.5 0 1 1 8.52 3.53a0.750.75 0 1 1-0.17 1.49A3 3 0 0 0 5 8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcGoal16;
