import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-snowboarding",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSnowboarding {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 3c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm7.4 17.09a0.750.75 0 0 0-0.640.17c-0.690.6-1.640.88-2.60.67L17 20.69l-1-6.19-3.32-2.67 1.8-2.89A6.51 6.51 0 0 0 20 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-0.52-1.21C15.16 5.64 14.61 5 13.7 5H8L5.5 9l1.7 1.06L9.1 7h2.35l-2.51 3.99c-0.280.45-0.37 1-0.25 1.52L9.5 16 6 18.35l-0.47-0.1c-0.96-0.2-1.71-0.85-2.1-1.67a0.740.74 0 0 0-0.51-0.42c-0.43-0.09-0.820.2-0.90.58-0.040.14-0.020.310.050.460.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.440.31 2.86-0.11 3.9-1.010.13-0.110.21-0.260.24-0.410.07-0.38-0.16-0.8-0.59-0.89zM8.73 18.93l3.02-2.03-0.44-3.32 2.84 2.020.75 4.64-6.17-1.31z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSnowboarding;
