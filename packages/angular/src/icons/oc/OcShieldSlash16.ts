import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-shield-slash-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcShieldSlash16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.530.13a1.75 1.75 0 0 0-1.07 0l-2.090.67a0.750.75 0 0 0 0.46 1.43l2.09-0.67a0.250.25 0 0 1 0.15 0l5.25 1.68a0.250.25 0 0 1 0.170.24V7c0 0.23-0.010.46-0.020.69a0.750.75 0 1 0 1.50.11c0.02-0.270.03-0.540.03-0.81V3.48a1.75 1.75 0 0 0-1.22-1.67L8.530.13ZM1 2.86l-0.69-0.5a0.750.75 0 1 1 0.88-1.21l14.5 10.5a0.750.75 0 1 1-0.88 1.21l-1.28-0.93c-0.99 1.4-2.55 2.62-4.86 3.61-0.420.18-0.90.18-1.33 0-2.45-1.04-4.05-2.36-5.03-3.85C1.32 10.18 1 8.57 1 7Zm1.5 1.09V7c0 1.360.28 2.67 1.06 3.860.78 1.19 2.12 2.34 4.37 3.30.050.020.110.020.15 0 2.13-0.9 3.44-1.98 4.24-3.11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcShieldSlash16;
