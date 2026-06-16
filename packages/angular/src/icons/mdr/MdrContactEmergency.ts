import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-contact-emergency",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrContactEmergency {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 3H2C0.9 3 0 3.9 0 5v14c0 1.10.9 2 2 2h20c1.1 0 1.99-0.9 1.99-2L24 5c0-1.1-0.9-2-2-2zM9 8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM2.08 19c1.38-2.39 3.96-4 6.92-4s5.54 1.61 6.92 4H2.08zm18.52-8.5c-0.210.36-0.670.48-1.020.27l-0.82-0.48v0.95c0 0.41-0.340.75-0.750.75s-0.75-0.34-0.75-0.75v-0.94l-0.820.48a0.750.75 0 0 1-0.75-1.29L16.5 9l-0.82-0.48a0.740.74 0 0 1-0.27-1.02c0.21-0.360.67-0.48 1.02-0.27l0.820.48v-0.96c0-0.410.34-0.750.75-0.75s0.750.340.750.75v0.95l0.82-0.48a0.750.75 0 0 1 0.75 1.29L19.5 9l0.820.48c0.360.20.490.660.28 1.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrContactEmergency;
