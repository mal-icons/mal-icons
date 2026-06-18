import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-ada",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAda {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.87 13.45c0-0.430.45-0.58 1.18-0.660.61-0.07 1.09-0.17 1.4-0.37v0.54c0 0.64-0.540.96-1.26 1.03a47.01 47 0 0 0-0.92-0.08c-0.25-0.09-0.39-0.26-0.39-0.46m-13.990.19h3.11l0.260.76a33 33 0 0 0-3.960.97zM6.43 9.06l1.09 3.2H5.34zm6.92 1.61c0.82 0 1.480.74 1.48 1.66 0 0.65-0.35 1.21-0.85 1.47a47.01 47 0 0 0-1.150.05c-0.56-0.23-0.96-0.81-0.96-1.53 0-0.940.66-1.66 1.48-1.66m9.48 3.66v-3.07c0-0.46-0.18-1.98-2.53-1.98-1.52 0-2.570.82-2.72 1.92h1.48c0.13-0.490.74-0.73 1.27-0.730.66 0 1.060.25 1.060.55 0 0.47-0.680.59-1.650.68-1.280.11-2.370.45-2.37 1.75q0 0.190.040.37a51.01 51 0 0 0-1.09-0.03V6.84h-1.48v3.12a2.43 2.43 0 0 0-1.71-0.67c-1.5 0-2.75 1.3-2.75 3.02a3.2 3.2 0 0 0 0.47 1.7 38.01 38 0 0 0-1.120.14L7.38 7.41H5.5l-2.99 8.59A22 22 0 0 0 0 17.16c3.84-1.67 13.3-3.94 24-2.55-0.05-0.06-0.47-0.17-1.16-0.29"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAda;
