import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-vowpalwabbit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVowpalwabbit {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.87 21.36c0.080.20.68 1.65 1.69 2.16 1.080.55 1.610.41 1.610.41s-0.91-3.38-0.11-6.08c0.81-2.69 1.48-2.93 1.48-2.93s1.480.59 2.45 0c0.97-0.59 1.26-1.75 1.26-1.75s-0.67-2.47-1.26-3.44c-0.59-0.97-1.23-1.48-2.02-1.83a235.34 235.34 0 0 0-1.51-0.65 11.28 11.28 0 0 0-1-3.2C16.24 1.53 14.68 0 14.68 0s-0.810.7-1.02 2.03c0.560.5 1.46 1.45 2.26 2.420.40.490.91 1.23 1.31 1.85a26.05 26.05 0 0 0-2.6-2.63c-1.83-1.59-3.63-2.82-3.63-2.82s-1.29 2.020.24 4.79c1.05 1.78 3.7 3.31 3.7 3.31s-2.740.13-3.70.35c-0.970.21-2.040.59-3.25 1.4-1.210.81-2.01 1.65-3.01 3.01-1 1.37-1.96 3.71-1.96 3.71s-0.13-0.19-1.05-0.19c-0.91 0-1.210.19-1.210.19s0.03 2.310.59 3.44c0.56 1.13 1.37 1.56 2.39 1.560.2700.83 0 0.83 0s0.7 1.1 1.13 1.37c0.430.27 1.180.22 1.180.22h8.25s-0.05-0.62-0.51-1.1c-0.45-0.47-0.98-0.61-1.12-0.67a3.78 3.78 0 0 0-1.01-0.17h-2.12s2.69-0.09 4.27-1.94c0.83-0.970.91-2.150.83-2.74-0.04-0.29-0.29-1.29-0.75-1.88a5.91 5.91 0 0 0-1.18-1.13c-0.52-0.36-1.17-0.64-1.91-0.94 1.080.27 1.590.38 2.64 1.13 1.050.75 1.51 1.91 1.59 2.180.080.270.270.670.22 1.83-0.110.97-0.22 1.21-0.48 1.72-0.220.46-0.430.74-0.72 1.07Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVowpalwabbit;
