import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-slides",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSlides {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.70.4 4.580.97l5.70.55zm-2.440.85-0.040.41H6.44ZM0 2.15V21.85h19.7V2.15Zm20.20.84V20.24l1.66-17.09zm2.080.97-1.65 17L24 4.3ZM9.93 7.36c0.6 0 1.130.08 1.590.230.470.150.70.320.70.51 0 0.15-0.070.35-0.20.59-0.130.24-0.250.36-0.360.36-0.01 0-0.09-0.04-0.23-0.1a2.82 2.82 0 0 0-1.34-0.31c-0.5 0-0.880.1-1.150.31a0.950.95 0 0 0-0.410.8c0 0.330.10.580.310.770.20.190.550.36 1.040.51 1.10.34 1.840.71 2.23 1.110.390.40.59 1.010.59 1.82 0 0.81-0.29 1.48-0.87 2.01-0.580.53-1.270.79-2.070.79-0.8 0-1.5-0.12-2.08-0.36-0.58-0.24-0.87-0.47-0.87-0.69 0-0.120.07-0.290.22-0.530.14-0.230.28-0.350.39-0.350.01 0 0.110.060.280.170.180.110.430.220.750.330.330.110.720.17 1.180.170.46 0 0.84-0.13 1.14-0.390.3-0.260.45-0.620.45-1.07 0-0.45-0.13-0.8-0.39-1.05-0.26-0.25-0.79-0.49-1.57-0.71-0.78-0.22-1.35-0.5-1.7-0.85-0.35-0.34-0.53-0.87-0.53-1.57 0-0.70.27-1.290.81-1.760.54-0.47 1.24-0.71 2.1-0.71Zm5.86 14.99 4.170.40.04-0.4zm1.130.61 3.180.640.07-0.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSlides;
