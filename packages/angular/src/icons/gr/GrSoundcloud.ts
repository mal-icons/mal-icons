import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-soundcloud",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrSoundcloud {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M0 15.92c0 0.30.110.520.320.68a0.890.89 0 0 0 0.690.16c0.23-0.040.39-0.130.49-0.250.09-0.120.14-0.320.14-0.59v-3.24a0.80.8 0 0 0-0.24-0.590.80.8 0 0 0-0.59-0.240.790.79 0 0 0-0.570.240.80.8 0 0 0-0.240.59v3.24Zm2.57 1.39c0 0.220.080.380.230.490.150.110.350.160.590.160.25 0 0.45-0.050.6-0.160.15-0.110.23-0.270.23-0.49v-7.55a0.790.79 0 0 0-0.24-0.570.80.8 0 0 0-0.59-0.240.790.79 0 0 0-0.570.240.790.79 0 0 0-0.240.58v7.55Zm2.560.36c0 0.220.080.380.240.490.160.110.360.160.60.160.24 0 0.43-0.050.59-0.160.15-0.110.23-0.270.23-0.48v-6.89c0-0.23-0.08-0.43-0.24-0.59a0.780.78 0 0 0-0.57-0.250.810.81 0 0 0-0.590.250.810.81 0 0 0-0.250.59v6.89Zm2.570.03c0 0.410.280.610.830.610.55 0 0.83-0.20.83-0.61V6.53c0-0.62-0.19-0.98-0.57-1.06-0.25-0.06-0.490.01-0.730.21-0.240.2-0.360.48-0.360.85v11.17Zm2.610.32V5.87c0-0.390.12-0.620.35-0.69a6.54 6.54 0 0 1 4.670.63A6.56 6.56 0 0 1 17.71 8a6.54 6.54 0 0 1 1.06 3.07c0.45-0.190.94-0.29 1.45-0.29 1.04 0 1.930.37 2.68 1.110.740.74 1.11 1.62 1.11 2.66 0 1.04-0.37 1.93-1.11 2.67-0.740.74-1.63 1.11-2.66 1.11l-9.72-0.01a0.260.26 0 0 1-0.15-0.120.330.33 0 0 1-0.05-0.16Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrSoundcloud;
