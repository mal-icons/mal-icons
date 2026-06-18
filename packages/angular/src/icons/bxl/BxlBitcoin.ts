import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-bitcoin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlBitcoin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m11.95 8.82-0.55 2.19c0.620.15 2.530.78 2.84-0.460.32-1.29-1.67-1.58-2.29-1.73zm-0.82 3.3-0.6 2.42c0.740.19 3.040.92 3.38-0.440.36-1.42-2.03-1.79-2.77-1.97z"}],["path",{"d":"M14.42 2.3C9.060.96 3.64 4.22 2.31 9.580.97 14.94 4.23 20.36 9.58 21.7c5.36 1.34 10.78-1.92 12.12-7.28 1.34-5.36-1.92-10.78-7.28-12.12zm1.99 8.28c-0.140.97-0.69 1.45-1.4 1.610.990.51 1.49 1.3 1.01 2.66-0.59 1.69-2 1.83-3.87 1.48l-0.45 1.82-1.1-0.270.45-1.79a44.62 44.62 0 0 1-0.87-0.23l-0.45 1.8-1.09-0.280.45-1.82c-0.26-0.07-0.52-0.14-0.78-0.2L6.87 15l0.55-1.26s0.810.220.80.2c0.310.080.45-0.120.5-0.26l0.72-2.870.120.03a0.860.86 0 0 0-0.11-0.04l0.51-2.05c0.01-0.23-0.07-0.53-0.51-0.640.02-0.01-0.8-0.2-0.8-0.2l0.29-1.17 1.510.3800.01c0.230.060.460.110.70.17l0.45-1.8 1.10.27-0.44 1.77c0.290.070.590.140.880.21l0.44-1.75 1.10.27-0.45 1.8c1.380.48 2.4 1.2 2.2 2.53z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlBitcoin;
