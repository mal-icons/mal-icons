import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-auchan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAuchan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14.47 18.75 1.65 4.64h1.22l-1.74-4.86a7.96 7.96 0 0 1-1.130.22M0 23.39h5.51l1.78-5.61H1.92A107.28 107.28 0 0 0 0 23.39m7.25-12.63L10.43 8.1c0.52-1.41 1.06-2.82 1.63-4.020.280.640.55 1.280.83 1.96 1.23-1.01 2.03-1.56 2.07-1.58l0.02-0.01a5.66 5.66 0 0 1 1.63-0.71 112.78 112.78 0 0 0-1.48-3.13h-6.17c-0.510.99-2.43 4.95-4.68 10.4h2.27c0.37 0 0.55-0.140.7-0.26m12.91 4.41a7.45 7.45 0 0 1-3.47 2.97l1.87 5.26H24c-1.09-3.3-2.25-6.28-3.35-9.07-0.150.3-0.320.56-0.490.84M18.55 6.29c0.16 0 0.30.040.440.1-0.030-0.05-0.01-0.08-0.01a0.580.58 0 0 0-0.580.580.580.58 0 0 0 0.580.580.580.58 0 0 0 0.58-0.58c0-0.020-0.040-0.05a11 0 0 1 0.080.38c0 0.55-0.45 1-1.01 1-0.560-1.01-0.45-1.01-1 0-0.560.45-1 1.01-1zm-5.64 11.32c1.33 0 4.5-0.34 6.22-3.1 1.72-2.76 2.32-7.14 2.32-7.14l1.88-0.89c0.12-0.060.09-0.26-0.06-0.26H21.25c-0.32-0.5-1.42-1.55-3.04-1.55-0.96 0-1.810.27-2.560.76 0 0-1.10.75-2.7 2.13l-4.9 4.08c-0.380.32-0.840.52-1.480.52H0.39c-0.17 0-0.120.15-0.090.230.44 1.33 1.6 2.51 3.62 2.51l-1.45 1.49c-0.060.06-0.060.230.090.23h5.5c3.98 0 6.42-1.74 8.03-4.150.14-0.210.27-0.430.39-0.640.060.030.070.090.040.14-0.410.98-1.42 2.97-3.27 4.15-0.640.37-0.840.49-1.740.83-0.060.03-0.090.12-0.060.21l2.23 6.23h1.22l-2.04-5.78h0.06z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAuchan;
