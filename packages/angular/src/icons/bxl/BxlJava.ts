import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-java",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlJava {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.37 17.51c-3.090.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-0.54 11.59 11.59 0 0 1-4.160.18c-1.31-0.15-0.54-0.64-0.54-0.64zm5.33-1.68a16.27 16.27 0 0 1-5.360.26c-1.31-0.14-0.45-0.77-0.45-0.77-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-0.83-0.49zm1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-0.25 2.12s2.46-1.27 1.33-2.86-1.86-2.22 2.51-4.75z"}],["path",{"d":"M18.13 19.14s0.560.46-0.630.82c-2.270.69-9.430.9-11.42 0-0.72-0.310.62-0.74 1-0.83a2.54 2.54 0 0 1 0.69-0.08c-0.8-0.56-5.15 1.1-2.21 1.58 8.05 1.37 14.64-0.56 12.57-1.49zm-2.76-4.88a7 7 0 0 1 0.92-0.49s-1.510.27-3 0.4a28.11 28.11 0 0 1-4.820.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.160.75c-2.06 1.03 5.09 1.48 8.790.51zm0.91 2.44a0.390.39 0 0 1-0.080.09c5-1.32 3.18-4.650.78-3.81a0.710.71 0 0 0-0.330.25s0.14-0.050.43-0.12c1.22-0.25 2.92 1.63-0.8 3.59zM12 13c-0.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c0.84 3.31-3 4.31-4.34 6.37-0.93 1.410.47 2.92 2.34 4.63z"}],["path",{"d":"M16.41 21.32a29.75 29.75 0 0 1-9.140.14s0.460.38 2.840.53c3.610.23 9.15-0.12 9.29-1.83 0 0-0.260.64-2.99 1.16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlJava;
