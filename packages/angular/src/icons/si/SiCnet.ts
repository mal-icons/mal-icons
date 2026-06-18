import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-cnet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCnet {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.89 9.26C0.66 9.26 0 9.8 0 10.87v2.27c0 1.070.66 1.6 1.89 1.6h3.58v-2.35h-0.29c-0.13 1.37-0.73 1.94-1.91 1.94h-0.74c-0.58 0-0.86-0.29-0.86-0.85v-2.94c0-0.570.28-0.850.86-0.85h0.74c1.2 0 1.790.54 1.91 1.87h0.29V9.26H1.89Zm7.52 0v0.28c1.270.13 1.860.67 1.86 2.1v1.72L7.91 9.26H6.23v5.48H8.55v-0.28c-1.31-0.14-1.89-0.68-1.89-2.12v-1.96l3.58 4.36h1.46V9.26H9.41Zm3.06 0v5.48h5.48v-2.35h-0.29c-0.13 1.37-0.73 1.95-1.91 1.95h-1.65v-2.23h0.56c0.93 0 1.330.42 1.42 1.32h0.3v-3.01h-0.3c-0.090.9-0.49 1.31-1.42 1.31h-0.56V9.67h1.65c1.2 0 1.790.55 1.92 1.87h0.29V9.26h-5.47Zm6.05 0v2.28h0.29c0.13-1.250.65-1.83 1.63-1.94v3.85c0 0.67-0.240.94-1.10.99v0.3h3.82v-0.29c-0.86-0.06-1.1-0.32-1.1-0.99v-3.85c0.980.11 1.510.69 1.63 1.94H24V9.26h-5.47Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCnet;
