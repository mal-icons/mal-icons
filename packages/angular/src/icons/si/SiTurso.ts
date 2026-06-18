import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-turso",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTurso {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m23.310.8-0.56-0.42-1.11 1.19-0.89-1.29-0.510.240.7 1.8-0.330.35L18.08 0l-0.570.28 2.25 4.84-2.110.74h-0.05l-1.14-1.36-1.14 1.36H8.69l-1.14-1.36-1.15 1.36H6.36l-2.12-0.74L6.490.28 5.92 0l-2.53 2.67-0.33-0.350.71-1.8-0.51-0.24-0.89 1.29L1.250.380.690.8 2.42 3.69l-0.890.940.31 2.38 2.060.79L3.9 8.82H1.95v0.44l0.76 1.08 1.20.43v6.97l3.06 4.55L7.66 24l1.1-1.61L9.9 24l1-1.61L12 24l1.1-1.61L14.1 24l1.14-1.61L16.34 24l0.7-1.71 3.06-4.55v-6.97l1.2-0.430.76-1.08v-0.44h-1.95l0-1.03 2.05-0.780.31-2.37-0.89-0.94zm-8.93 18.72H8.03l0.79-1.610.79 1.620.79-1.080.79 1.080.79-1.080.79 1.080.79-1.080.79 1.080.79-1.610.79 1.62zm3.89-7.39-3.3 1.08-0.14 3.06-2.830.63-2.83-0.63-0.14-3.06-3.3-1.08v-1.63l4.27 1.21-0.05 4.13h4.11l-0.05-4.13 4.27-1.21z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTurso;
