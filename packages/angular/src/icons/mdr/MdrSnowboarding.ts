import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-snowboarding",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSnowboarding {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 3c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zM6.35 9.53c0.470.29 1.090.15 1.38-0.32L9.1 7h2.35l-2.51 3.99c-0.280.45-0.37 1-0.25 1.52L9.5 16 6 18.35l-0.47-0.1c-0.96-0.2-1.71-0.85-2.1-1.67a0.740.74 0 0 0-0.51-0.42c-0.43-0.09-0.820.2-0.90.58-0.040.14-0.020.310.050.460.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.440.31 2.86-0.11 3.9-1.010.13-0.110.21-0.260.24-0.410.08-0.38-0.16-0.8-0.59-0.89a0.750.75 0 0 0-0.640.17c-0.690.6-1.640.88-2.60.67L17 20.69l-0.88-5.43c-0.08-0.49-0.34-0.93-0.72-1.24l-2.72-2.19 1.8-2.89a6.51 6.51 0 0 0 4.39 2.96c0.60.11 1.13-0.39 1.13-1 0-0.48-0.35-0.89-0.83-0.98a4.5 4.5 0 0 1-3.3-2.64l-0.52-1.21C15.16 5.64 14.61 5 13.7 5H9.11c-0.69 0-1.330.36-1.70.94L6.03 8.15c-0.290.47-0.15 1.090.32 1.38zm2.38 9.4 2.25-1.51c0.47-0.320.73-0.880.65-1.44l-0.32-2.4 2.84 2.020.75 4.64-6.17-1.31z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSnowboarding;
