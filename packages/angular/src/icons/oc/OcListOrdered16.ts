import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-list-ordered-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcListOrdered16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 3.25a0.750.75 0 0 1 0.75-0.75h8.5a0.750.75 0 0 1 0 1.5h-8.5A0.750.75 0 0 1 5 3.25Zm0 5a0.750.75 0 0 1 0.75-0.75h8.5a0.750.75 0 0 1 0 1.5h-8.5A0.750.75 0 0 1 5 8.25Zm0 5a0.750.75 0 0 1 0.75-0.75h8.5a0.750.75 0 0 1 0 1.5h-8.5a0.750.75 0 0 1-0.75-0.75ZM0.92 10.32a0.50.5 0 0 1-0.85-0.52l0000000.01-0.01c0.1-0.140.22-0.270.35-0.380.23-0.190.59-0.39 1.07-0.390.47 0 0.860.18 1.130.480.260.290.380.670.38 1.04 0 0.99-0.69 1.5-1.16 1.85l-0.050.04c-0.30.23-0.520.4-0.650.6h1.36a0.50.5 0 0 1 0 1H0.5a0.50.5 0 0 1-0.5-0.5c0-10.69-1.52 1.17-1.87l0.04-0.02c0.53-0.40.8-0.620.8-1.08a0.570.57 0 0 0-0.13-0.38C1.81 10.07 1.7 10 1.5 10a0.660.66 0 0 0-0.430.160.840.84 0 0 0-0.140.15ZM2 2.5V6h0.5a0.50.5 0 0 1 0 1H0.5a0.50.5 0 0 1 0-1h0.5V3.31l-0.280.14a0.50.5 0 0 1-0.45-0.89l1-0.5a0.50.5 0 0 1 0.720.45Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcListOrdered16;
