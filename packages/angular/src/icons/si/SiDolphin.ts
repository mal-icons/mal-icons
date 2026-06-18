import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dolphin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDolphin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.2 5.31a6.61 6.61 0 0 0-0.80.03c-1.220.11-1.830.5-2.130.69-0.130.08-0.340.1-0.520.06-3.52-1.08-6.74-0.62-8.36-0.14-3.230.95-3.89 2.89-4.1 3.98-0.070.3-0.090.53-0.130.67-0.110.44-1.56 1.23-1.03 1.780.520.53 1.420.48 2.080.22 1.49-0.59 2.65-0.81 4.6-0.88h0.02c0.1800.34-0.030.480.090.160.150.71 1.31 1.93 2.16 1.360.95 2.770.91 2.860.77v0h0l00v0c0.04-0.12-0.31-0.2-1.06-1.13-0.65-0.8-0.59-1.640.04-1.49a0.590.59 0 0 0 0.040.01c3.450.9 5.75 2.92 5.87 2.95v0h0l0000v-0.01c0.17-0.23-0.96-2.96-3.87-4.59-3.3-1.84-6.39-0.97-7.06-0.69-0.16-0.270.97-1.38 3.38-1.48 5.4-0.21 8.74 2.75 10.58 4.56 2.25 2.22 3.92 5.85 3.97 5.85l00h0v0h0c0.12-0.12-0.2-2.39-0.88-4.04-0.88-2.13-1.97-3.69-3.52-5.15a15.57 15.57 0 0 0-2.15-1.69c-0.11-0.08-0.25-0.18-0.34-0.330.43-1 2.05-1.04 2.21-1.13l0.01000v0l00c0.09-0.18-0.42-0.97-2.11-1.02z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDolphin;
