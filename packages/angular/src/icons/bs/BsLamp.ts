import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-lamp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsLamp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M5.040.3A0.50.5 0 0 1 5.5 0h5c0.2 0 0.380.120.460.3l3 7a0.50.5 0 0 1-0.360.69h0q-0.220.04-0.450.08a33 33 0 0 1-4.640.43V13.5a0.50.5 0 1 1-1 0V8.49a33 33 0 0 1-4.64-0.42q-0.22-0.04-0.45-0.08h0a0.50.5 0 0 1-0.36-0.69l3-7ZM3.21 7.12A31 31 0 0 0 8 7.5a31 31 0 0 0 4.79-0.38L10.17 1H5.83z"}],["path",{"d":"M6.49 12.57a0.50.5 0 0 1-0.410.57c-0.710.12-1.280.3-1.650.49a1.3 1.3 0 0 0-0.370.270.30.3 0 0 0-0.050.08l0000.01V14l00.010.020.03a0.60.6 0 0 0 0.140.15c0.170.130.440.270.810.40.750.25 1.820.41 3.020.41s2.27-0.16 3.02-0.41c0.38-0.130.65-0.260.81-0.39a0.60.6 0 0 0 0.15-0.15l0.02-0.03L12 14v0a0.30.3 0 0 0-0.06-0.09 1.3 1.3 0 0 0-0.37-0.26c-0.38-0.2-0.94-0.37-1.65-0.49a0.50.5 0 1 1 0.16-0.99c0.770.13 1.450.33 1.960.59C12.5 13 13 13.4 13 14c0 0.43-0.260.75-0.540.98-0.290.23-0.680.41-1.120.56-0.880.29-2.060.47-3.340.47s-2.46-0.17-3.34-0.46c-0.44-0.14-0.83-0.33-1.12-0.56C3.26 14.75 3 14.43 3 14c0-0.60.5-1 0.96-1.240.51-0.27 1.19-0.47 1.96-0.59a0.50.5 0 0 1 0.570.41"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsLamp;
