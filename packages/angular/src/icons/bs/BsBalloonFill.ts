import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-balloon-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBalloonFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8.48 10.9C11.21 10.23 13 7.84 13 5A5 5 0 0 0 3 5c0 2.84 1.79 5.23 4.52 5.9l-0.240.49a0.250.25 0 1 0 0.450.22l0.04-0.08c0.010.170.020.320.050.450.070.340.210.620.45 1.1l0.010.03c0.210.420.180.850.05 1.25-0.130.4-0.370.75-0.53 1a0.250.25 0 0 0 0.420.28l0-0.01c0.17-0.250.43-0.650.59-1.110.16-0.480.21-1.05-0.08-1.63-0.26-0.51-0.36-0.73-0.42-1a2 2 0 0 1-0.04-0.29l0.010.02a0.250.25 0 1 0 0.45-0.22zM4.35 3.36a4 4 0 0 1 3.15-2.33C7.771 8 1.22 8 1.5s-0.230.5-0.50.54c-0.950.16-1.750.78-2.17 1.62a0.60.6 0 0 1-0.520.34c-0.35 0-0.6-0.33-0.46-0.64"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBalloonFill;
