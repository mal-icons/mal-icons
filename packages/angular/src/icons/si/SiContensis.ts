import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-contensis",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiContensis {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.92 0q-0.130.01-0.220.16c-2.79 4.73-6.55 7.99-6.79 10.15-0.22 2.020.51 3.69 1.71 4.73a30 30 0 0 0 1.36-1.83c-0.02-0.42-0.18-3.680.16-4.60.2 1.420.61 2.730.76 3.18a43 43 0 0 0 1.03-1.75c-0.03-0.83-0.12-3.750.17-4.420.080.970.43 2.190.65 2.860.29-0.570.44-0.920.45-0.93l1.02-2.26-0.27 2.45c00.01-0.090.82-0.31 2.060.59-0.48 1.54-1.3 2-1.930.040.77-1.67 2.83-2.32 3.6a42 42 0 0 1-0.4 1.7c0.57-0.32 1.87-1.07 2.6-1.76-0.110.79-2.42 2.78-3.03 3.3a30 30 0 0 1-0.5 1.49c1.4-0.08 2.88-0.79 4.11-2.3C20.55 9.64 16.24-0.09 14.92 0m-2.93 2.8c-0.58 0-1.140.14-1.580.39L3.84 6.94c-0.920.52-1.59 1.67-1.59 2.72v7.49c0 1.050.67 2.19 1.59 2.72l6.57 3.74c0.440.25 1.010.39 1.590.390.58 0 1.15-0.14 1.59-0.39l6.57-3.74c0.92-0.52 1.59-1.67 1.59-2.72v-7.49c0-1.05-0.67-2.19-1.59-2.72l-1.35-0.77c0.130.620.24 1.230.3 1.82a52 52 0 0 1 0.14 1.67v7.49c0 0.16-0.190.49-0.330.57l-6.57 3.74a0.80.8 0 0 1-0.330.060.80.8 0 0 1-0.33-0.06l-6.57-3.74c-0.14-0.08-0.34-0.41-0.34-0.57v-7.49c0-0.160.2-0.490.34-0.57l3.65-2.08c0.43-0.580.91-1.19 1.44-1.85a92 92 0 0 0 1.81-2.35m1.79 7.3c-1.25 2.31-3.46 5.87-6.14 8.130.040.020.390.23 2.7 1.54 1.91-2.79 2.95-7.01 3.44-9.66M7.63 18.23v0l0000h0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiContensis;
