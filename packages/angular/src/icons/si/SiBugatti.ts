import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-bugatti",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBugatti {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 2.98h18.59c0.0200.040.010.060.010.440.020.860.09 1.280.22 1.460.45 2.51 1.37 3.12 2.770.45 1.050.5 2.260.32 3.16a4.63 4.63 0 0 1-1.37 2.48c-0.010.01-0.030.03-0.040.050.020.030.050.040.080.06a4.77 4.77 0 0 1 1.95 3.56c00.020.010.040.010.06v0.79c00.03-0.010.05-0.010.0800.0500.09-0.010.14a5.5 5.5 0 0 1-0.21 1.05c-0.4 1.28-1.17 2.26-2.34 2.92-0.840.47-1.740.69-2.70.69-6.240-12.480-18.720v-4.74h2.99l0 1.74c0.130.02 7.230.01 7.29-0.01v-4.67h-3.06v1.43c-0.10.02-2.930.01-2.990V8.91h2.99v1.42c0.10.02 30.01 3.060V5.98H3V7.51H0.01Zm13.75 15.05h4.74c0.25 0 0.51-0.020.75-0.090.77-0.21 1.3-0.68 1.55-1.45a2.61 2.61 0 0 0-0.01-1.64 2.07 2.07 0 0 0-1.12-1.27 2.55 2.55 0 0 0-1.09-0.24h-4.82zm0-12.06v4.38h4.4a2.5 2.5 0 0 0 0.72-0.1c0.68-0.2 1.15-0.63 1.38-1.30.14-0.430.16-0.870.07-1.31-0.16-0.74-0.6-1.25-1.31-1.51a2.71 2.71 0 0 0-0.95-0.15Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBugatti;
