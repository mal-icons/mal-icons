import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-railway",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiRailway {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.11 10.27A13.03 13.03 0 0 11.48h18.23c-0.06-0.12-0.15-0.24-0.23-0.35-3.12-4.03-4.79-3.68-7.19-3.78-0.8-0.03-1.34-0.05-4.52-0.05-1.7 0-3.550.01-5.360.01-0.230.63-0.46 1.24-0.57 1.74h9.34v1.22H0.11v0zm18.26 2.43H0.01c0.020.330.050.650.090.96h16.95c0.75 0 1.18-0.43 1.32-0.96zm-17.32 4.28s2.81 6.9 10.93 7.02c4.86 0 9.03-2.88 10.92-7.02H1.06zM11.99 0C7.5 0 3.59 2.47 1.53 6.11l4.750v0c3.71 0 3.850.02 4.570.05l0.450.02c1.560.05 3.490.22 5 1.360.820.62 2.01 1.99 2.71 2.970.650.90.84 1.940.4 2.93-0.410.91-1.29 1.46-2.35 1.46H0.39s0.10.420.250.89h22.75A12.03 12.03 0 24 12.01C24 5.38 18.62 0 11.99 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiRailway;
