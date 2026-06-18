import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-jitpack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiJitpack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.19 0c-2.030.39-3.47 1.2-4.32 2.32l2.88 1.66a2.81 2.81 0 0 1 1.88-0.19c0.18-1.090.05-2.36-0.44-3.79Zm-4.94 3.06L5.83 10.72l4.73 2.74 1.11-1.92c-0.5-0.5-0.72-1.26-0.74-2.04-0.03-0.970.2-2.040.64-3.010.32-0.720.76-1.39 1.31-1.89L10.25 3.06h0Zm10.50.15c-1.490.29-2.660.8-3.52 1.5a2.82 2.82 0 0 1 0.78 1.73l2.87 1.66c0.54-1.30.53-2.95-0.13-4.89Zm-18.360.41L0.46 6.96l5.19 2.17L8.74 3.78l-6.35-0.16Zm12.54 1.02c-0.330.01-0.640.12-0.940.3-0.610.36-1.16 1.09-1.54 1.93-0.380.84-0.58 1.81-0.56 2.590.030.780.27 1.330.65 1.55h0c0.380.220.970.16 1.66-0.210.69-0.37 1.42-1.03 1.96-1.780.54-0.750.89-1.590.9-2.30.01-0.71-0.24-1.28-1.04-1.75-0.4-0.23-0.76-0.33-1.09-0.33h0Zm2.99 2.85c-0.160.73-0.52 1.44-0.98 2.08-0.620.86-1.43 1.6-2.28 2.06-0.70.37-1.460.57-2.150.38l-1.11 1.92 4.74 2.73 4.42-7.66-2.62-1.51Zm2.76 3.19-3.09 5.36 4.48 3.41 1.93-3.34-3.31-5.42Zm-14.07 1.59c-1.140.5-2.02 1.18-2.63 2l4.45 2.57c0.41-0.940.56-2.040.43-3.27l-2.25-1.3Zm-3.05 2.86-3.54 6.13v1.9l4.37-7.55-0.82-0.47Zm8.610.35c-1.140.5-2.02 1.18-2.63 2l4.45 2.57c0.41-0.940.56-2.040.43-3.27l-2.25-1.3v0Zm-6.870.65L0.72 24h1.1l4.3-7.4-0.82-0.48v0Zm1.75 1.01L3.09 24H4.19l3.68-6.39-0.82-0.47Zm2.08 1.2L5.91 24h1.09l2.94-5.19-0.82-0.47Zm1.75 1.01L8.28 24h1.09l2.33-4.18-0.82-0.47Zm1.75 1.01L10.65 24h1.08l1.72-3.17-0.82-0.47Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiJitpack;
