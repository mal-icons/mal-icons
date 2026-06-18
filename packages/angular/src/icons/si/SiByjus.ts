import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-byjus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiByjus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.330.02A2.33 2.33 0 0 0 0 2.34v19.32a2.33 2.33 0 0 0 2.33 2.32h19.35A2.33 2.33 0 0 0 24 21.66V2.34A2.33 2.33 0 0 0 21.670.02zm10.05 3.5a3.44 3.44 0 0 1 0.07 0 4.32 4.32 0 0 1 3.27 1.46 4.45 4.45 0 0 1 0.96 2.37 4.16 4.16 0 0 1-0.46 2.27 5.02 5.02 0 0 1 2.42 2.01 5.24 5.24 0 0 1 0.73 3.37 4.68 4.68 0 0 1-1.15 2.47 4.84 4.84 0 0 1-2.26 1.54l-4.99 1.44a1.49 1.49 0 0 1-0.410.06 1.5 1.5 0 0 1-1.43-1.07L5.52 6.91a1.49 1.49 0 0 1 1.02-1.84l4.96-1.43a3.44 3.44 0 0 1 0.88-0.13zm0.250.86a3.09 3.09 0 0 0-0.850.12L6.94 5.89a0.740.74 0 0 0-0.510.92l3.53 12.21a0.750.75 0 0 0 0.920.51l4.66-1.34a4.09 4.09 0 0 0-0.9-8 3.3 3.3 0 0 0 1.14-2.27 3.48 3.48 0 0 0-0.93-2.55 2.99 2.99 0 0 0-2.23-0.98Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiByjus;
