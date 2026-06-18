import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-homarr",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHomarr {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.26 15.7a6.52 6.52 0 0 0 1.25-3.85c0-1.85-0.77-3.53-2.01-4.72a6.54 6.54 0 0 0-0.83-0.68c-0.84-0.58-1.82-0.96-2.88-1.1 0 00 000L3.03 10.46H0c0.31 2.38 2.01 4.32 4.25 4.99l0.44 1.77a6.56 6.56 0 0 0 1.57-1.53Zm14.71-5.24 1.25-5.100c-1.060.13-2.040.52-2.88 1.1a6.6 6.6 0 0 0-0.830.68c-1.24 1.19-2.01 2.86-2.01 4.72a6.52 6.52 0 0 0 1.25 3.85 6.56 6.56 0 0 0 1.57 1.53l0.44-1.77c2.25-0.67 3.94-2.61 4.25-4.99h-3.03zm-7.62 3.54a0.820.82 0 0 0 0.82-0.820.820.82 0 0 0-0.82-0.820.820.82 0 0 0-0.820.82c0 0.450.370.820.820.82m-2.71-1.64a0.820.82 0 0 0-0.820.82c0 0.450.370.820.820.82a0.820.82 0 0 0 0.82-0.820.820.82 0 0 0-0.82-0.82m-0.54 2.9c-1.670.4-3.09 1.32-4.13 2.53a7.82 7.82 0 0 0-1.34 2.25l2.180.01 12.440.0600c-1.37-3.65-5.27-5.78-9.16-4.85Zm3.25-4.91c0.09 0 0.180.020.260.05V7.26c0-1.35 1.1-2.45 2.45-2.450.86 0 1.610.45 2.05 1.120.24-0.20.49-0.380.75-0.55-0.61-0.9-1.64-1.49-2.8-1.49-1.86 0-3.38 1.51-3.38 3.38v3.43c0.15-0.210.39-0.350.67-0.35zM7.94 4.81c1.35 0 2.45 1.1 2.45 2.45v3.13c0.08-0.030.17-0.050.26-0.050.28 0 0.520.140.670.35V7.26c0-1.86-1.51-3.38-3.38-3.38-1.16 0-2.190.59-2.8 1.490.260.170.510.350.750.550.44-0.67 1.19-1.12 2.05-1.12"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHomarr;
