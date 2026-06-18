import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-codersrank",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCodersrank {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M23.13 8.64l-5.97-3.62a0.290.29 0 0 0-0.410.13l-1.4 3.29 2.84 1.7a0.530.53 0 0 1 0 0.92l-5.33 3.14-2.27 5.27a0.130.13 0 0 0 0.050.20.120.12 0 0 0 0.13-0.04l3.91-2.37 1.55 2.22a0.370.37 0 0 0 0.310.17h3.71a0.370.37 0 0 0 0.33-0.20.380.38 0 0 0-0.02-0.39l-2.51-3.85 5.09-3.08c0.58-0.350.87-0.740.87-1.17V9.81c0-0.43-0.29-0.82-0.87-1.17zM13.08 4.35L0.85 12.05c-0.580.35-0.860.74-0.84 1.17v1.17c0.010.430.30.820.87 1.15l6.06 3.5a0.290.29 0 0 0 0.41-0.15l1.36-3.29-2.88-1.63a0.520.52 0 0 1-0.28-0.380.530.53 0 0 1 0.25-0.54l5.3-3.24 2.18-5.32a0.130.13 0 0 0-0.04-0.140.120.12 0 0 0-0.150z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCodersrank;
