import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-filetype-doc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFiletypeDoc {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-7.84 9.17v0.52q0 0.38-0.120.64a0.860.86 0 0 1-0.320.390.90.9 0 0 1-0.470.130.90.9 0 0 1-0.47-0.130.870.87 0 0 1-0.32-0.39 1.55 1.55 0 0 1-0.12-0.64v-0.52q0-0.390.12-0.64a0.870.87 0 0 1 0.32-0.390.870.87 0 0 1 0.47-0.13q0.26 0 0.470.13a0.860.86 0 0 1 0.320.39q0.120.260.120.64m0.80.52v-0.51q0-0.56-0.2-0.97a1.46 1.46 0 0 0-0.59-0.63q-0.38-0.22-0.92-0.22-0.53 0-0.920.22a1.44 1.44 0 0 0-0.590.63q-0.20.41-0.20.98v0.51q0 0.560.210.970.210.410.590.630.390.220.920.220.54 0 0.92-0.220.38-0.220.59-0.630.2-0.410.2-0.97M0 11.93v4h1.46q0.6 0 1-0.24a1.45 1.45 0 0 0 0.6-0.69q0.2-0.450.2-1.08 0-0.63-0.2-1.07a1.43 1.43 0 0 0-0.59-0.68q-0.39-0.23-1-0.23zm0.790.65h0.56q0.37 0 0.610.15a0.90.9 0 0 1 0.350.45q0.120.30.120.75a2.3 2.3 0 0 1-0.070.59 1.1 1.1 0 0 1-0.20.420.80.8 0 0 1-0.330.25 1.3 1.3 0 0 1-0.480.08H0.79V12.57Zm7.420.48a1.7 1.7 0 0 0-0.10.63v0.5q0 0.370.10.63a0.830.83 0 0 0 0.30.390.850.85 0 0 0 0.480.130.90.9 0 0 0 0.4-0.090.70.7 0 0 0 0.27-0.250.80.8 0 0 0 0.12-0.36h0.77v0.08a1.27 1.27 0 0 1-0.230.67q-0.20.29-0.550.45a1.8 1.8 0 0 1-0.790.16q-0.54 0-0.91-0.22a1.4 1.4 0 0 1-0.57-0.63q-0.19-0.41-0.19-0.98v-0.5q0-0.570.2-0.980.2-0.410.57-0.630.38-0.220.91-0.220.33 0 0.610.10.280.090.490.27a1.33 1.33 0 0 1 0.470.96v0.07H9.78a0.850.85 0 0 0-0.12-0.380.70.7 0 0 0-0.27-0.260.80.8 0 0 0-0.4-0.10.80.8 0 0 0-0.470.140.870.87 0 0 0-0.30.4"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFiletypeDoc;
