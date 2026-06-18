import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-file-json",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsFileJson {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.82 15.12c-0.52 0-0.820.49-0.82 1.15 0 0.660.31 1.130.82 1.130.52 0 0.81-0.490.81-1.15 0-0.6-0.29-1.13-0.82-1.13z"}],["path",{"d":"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM8.02 16.7c0 0.96-0.46 1.3-1.2 1.3-0.18 0-0.41-0.03-0.56-0.08l0.09-0.61c0.10.040.240.060.390.060.32 0 0.52-0.140.52-0.67v-2.12h0.76v2.13zm1.46 1.29c-0.38 0-0.77-0.1-0.95-0.2l0.16-0.63c0.20.110.520.210.850.210.35 0 0.53-0.150.53-0.36 0-0.21-0.16-0.33-0.56-0.48-0.56-0.19-0.93-0.51-0.93-1 0-0.580.48-1.02 1.28-1.020.38 0 0.660.080.860.17l-0.170.62c-0.13-0.06-0.37-0.16-0.7-0.16s-0.490.15-0.490.33c0 0.220.190.310.630.480.60.220.880.530.88 1.0100.57-0.44 1.05-1.36 1.05zm3.310.01c-1 0-1.59-0.75-1.59-1.72 0-1.010.65-1.77 1.64-1.77 1.03 0 1.60.78 1.6 1.71C14.44 17.33 13.77 18 12.79 18zm4.95-0.05h-0.8l-0.72-1.3a12.64 12.64 0 0 1-0.58-1.19l-0.020.01c0.020.450.030.920.03 1.47v1.02h-0.7v-3.37h0.89l0.7 1.24c0.20.350.40.780.55 1.16h0.01c-0.05-0.44-0.06-0.9-0.06-1.41v-0.98h0.7v3.37zM14 9h-1V4l5 5h-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsFileJson;
