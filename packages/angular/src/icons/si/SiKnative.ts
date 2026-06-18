import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-knative",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKnative {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m10.14 2.36 4.71 2.27-0.91 1.58a0.270.27 0 0 0-0.030.18l0.61 3.44a0.260.26 0 0 0 0.090.16l2.68 2.25c0.050.040.110.060.170.06h1.88l0.51 2.22a0.490.49 0 0 1-0.090.42l-5.24 6.57a0.490.49 0 0 1-0.380.18h-8.4a0.490.49 0 0 1-0.38-0.18L0.11 14.94a0.490.49 0 0 1-0.09-0.41l1.87-8.19a0.490.49 0 0 1 0.27-0.33l7.57-3.64a0.490.49 0 0 1 0.43 0ZM7.24 16.63h1.67v-2.43l0.64-0.78 1.82 3.21h1.97l-2.59-4.27 2.46-3.17h-2.06l-1.69 2.47c-0.170.27-0.340.53-0.510.82h-0.03v-3.29H7.24v7.44ZM19.28 2.35l2.98 1.08c0.050.020.10.060.130.11l1.58 2.74c0.030.050.040.110.030.17l-0.55 3.12a0.240.24 0 0 1-0.080.14l-2.43 2.04a0.250.25 0 0 1-0.160.06h-3.17a0.250.25 0 0 1-0.16-0.06l-2.42-2.03a0.240.24 0 0 1-0.08-0.14l-0.55-3.12a0.240.24 0 0 1 0.03-0.16l1.58-2.74a0.250.25 0 0 1 0.13-0.11l2.98-1.08a0.240.24 0 0 1 0.17 0Zm-0.71 3.4c-0.03-0.09-0.1-0.14-0.2-0.14h-0.49V8.57h0.79V6.45c0.09-0.090.18-0.150.28-0.2a0.690.69 0 0 1 0.31-0.07c0.15 0 0.260.050.340.140.080.090.110.220.110.38V8.57h0.79V6.7c0-0.16-0.02-0.31-0.06-0.45a0.990.99 0 0 0-0.19-0.350.880.88 0 0 0-0.31-0.23 1.21 1.21 0 0 0-0.7-0.05 1.18 1.18 0 0 0-0.440.2 1.96 1.96 0 0 0-0.180.16l-0.05-0.21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKnative;
