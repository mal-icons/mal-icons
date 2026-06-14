import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-info-large",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiInfoLarge {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.84 17.52c-0.010-0.560.19-1.040.19-0.26 0-0.37-0.05-0.41-0.08-0.17-0.12-0.48-0.340.05-1.4l1-1.99c0.59-1.180.68-2.330.25-3.22-0.36-0.73-1.04-1.24-1.92-1.42-0.32-0.06-0.64-0.1-0.96-0.1-1.85 0-3.09 1.08-3.15 1.13-0.180.16-0.220.42-0.10.630.120.210.370.30.60.220.0100.56-0.19 1.04-0.190.26 0 0.370.060.40.080.170.120.480.34-0.05 1.4l-1 2c-0.59 1.19-0.68 2.33-0.24 3.230.360.73 1.04 1.24 1.92 1.420.310.060.640.10.950.1 1.85 0 3.1-1.08 3.15-1.130.18-0.160.22-0.420.1-0.63-0.12-0.2-0.37-0.3-0.59-0.22z"}],["circle",{"cx":"13","cy":"6","r":"2.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiInfoLarge;
