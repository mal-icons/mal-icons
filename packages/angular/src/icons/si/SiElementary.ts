import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-elementary",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiElementary {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 1a11 11 0 0 1 10.59 8.01 19.09 19.09 0 0 1-4.66 6.08c-0.940.81-1.96 1.53-3.08 2.04-1.130.5-2.370.8-3.60.72a6.23 6.23 0 0 1-2.66-0.76 20.02 20.02 0 0 0 5.68-4.58 9.97 9.97 0 0 0 2.31-4.17c0.18-0.790.2-1.60.04-2.4a4.42 4.42 0 0 0-1.08-2.11 4.33 4.33 0 0 0-2-1.19 5.25 5.25 0 0 0-2.33-0.08A7.8 7.8 0 0 0 7.2 4.85a9.77 9.77 0 0 0-2.94 7.49 7.88 7.88 0 0 0 1.95 4.59 18 18 0 0 1-3.560.85A11 11 0 0 1 12 1zm0.07 2.22c0.77 0 1.550.24 2.170.70.550.420.97 1.02 1.2 1.680.230.650.3 1.370.21 2.06a7.85 7.85 0 0 1-1.7 3.76 16.22 16.22 0 0 1-6.37 4.96c-0.48-0.42-0.9-0.92-1.2-1.48a6.61 6.61 0 0 1-0.75-3.87c0.12-1.320.58-2.6 1.2-3.79a7.92 7.92 0 0 1 3.02-3.42c0.68-0.37 1.45-0.6 2.22-0.6zm10.83 7.3A11 11 0 0 1 3.52 19a19.8 19.8 0 0 0 3.63-1.2c0.510.4 1.080.71 1.670.94a8 8 0 0 0 5.44-0.04 13.3 13.3 0 0 0 4.64-2.95 20 20 0 0 0 4-5.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiElementary;
