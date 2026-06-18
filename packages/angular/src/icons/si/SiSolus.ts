import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-solus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSolus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.45 0c-0.180.59-0.37 1.17-0.56 1.75A11.64 11.64 0 0 0 0 12.36a11.64 11.64 0 0 0 0.52 3.4l-0.340.6L0 16.73l0.280.14a3.45 3.45 0 0 0 0.740.22A11.64 11.64 0 0 0 2 18.87c4.030.34 8.550.51 12.45-0.06 3.19-0.46 5.94-1.42 7.74-3.120.25-0.230.47-0.470.67-0.720.02-0.040.04-0.050.06-0.080.01 0 0.03-0.040.04-0.050.02 0 0.03-0.040.04-0.060.01 0 0.02-0.040.02-0.040.33-0.440.59-0.890.8-1.31l0.18-0.36-0.36-0.36a5.94 5.94 0 0 0-0.36-0.35A11.64 11.64 0 0 0 11.640.72a11.64 11.64 0 0 0-3.210.46C7.960.51 7.60.04 7.45 0zm0.37 1.64C9.06 3.82 10.13 5.06 11.45 7.46c0.13 1.520.67 9.450.73 10.18-0.39-0.04-2.48-0.24-5.1-0.51-1.43-0.15-2.9-0.32-4.09-0.49l-1.9-0.45c2.15-3.79 5.55-9.73 6.74-14.55zm4.54 6.18s4.99 3.93 7.09 8.73c-2.56 1.26-4.92 1.1-6.36 1.09 1.02-2.63 1.02-6.21-0.73-9.82zm3.46 2.18a45.14 45.14 0 0 1 2.910.91c1.770.63 3.42 1.49 4.37 2.36a6.96 6.96 0 0 1-2.91 2.91c0.15-1.49-0.39-2.93-1.46-4-0.79-0.79-1.82-1.45-2.91-2.18zm6.71 6.48c-2.35 1.67-5.13 2.68-7.96 3.11a41.03 41.03 0 0 1-3.710.34h-0.32a53.48 53.48 0 0 1-3.73 0 85.76 85.76 0 0 1-4.18-0.23h0c2.56 3.26 6.99 4.89 11.09 4.1a11.37 11.37 0 0 0 4.5-1.85 11.64 11.64 0 0 0 0.01 0c0.31-0.210.61-0.440.9-0.68a11.64 11.64 0 0 0 0.04-0.04 11.56 11.56 0 0 0 3.38-4.76zM2.51 19.58a11.64 11.64 0 0 0 0.020.04c-0.01 0-0.01-0.04-0.02-0.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSolus;
