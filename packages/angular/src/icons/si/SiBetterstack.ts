import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-betterstack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBetterstack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m0.78 10.75-0.77 6.64a2.1 2.1 0 0 0 0.7 1.81l1.9 1.67c0.650.57 1.660.01 1.52-0.84L2.6 10.71c-0.17-1.06-1.7-1.02-1.820.04Zm12.37 8.71L8.63 6.43c-0.5-1.45-2.61-1.38-3.020.09l-1.38 4.92c-0.160.56-0.220.880 1.42h0.52l1.9 6.07c0.290.730.9 1.3 1.66 1.55l2.830.94c1.240.41 2.43-0.75 2-1.97zm10.63-1.03L15.79 3.44c-0.7-1.31-2.58-1.27-3.230.06l-1.97 3.96c-0.240.49-0.130.660.070.940.160.230.530.240.680.010.15-0.230.49-0.210.610.04l5.14 10.69a2.74 2.74 0 0 0 2.14 1.6l2.720.35c1.460.19 2.53-1.35 1.83-2.66z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBetterstack;
