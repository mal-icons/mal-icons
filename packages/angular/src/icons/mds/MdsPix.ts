import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-pix",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsPix {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.45 16.52-3.01-3.01c-0.11-0.11-0.24-0.13-0.31-0.13s-0.20.02-0.310.13L8.8 16.53c-0.340.34-0.870.89-2.640.89l3.71 3.7a3 3 0 0 0 4.24 0l3.72-3.71c-0.91 0-1.67-0.18-2.38-0.89zM8.8 7.47l3.02 3.02c0.080.080.20.130.310.13s0.23-0.050.31-0.13l2.99-2.99c0.71-0.74 1.52-0.91 2.43-0.91l-3.72-3.71a3 3 0 0 0-4.24 0l-3.71 3.7c1.76 0 2.30.58 2.610.89z"}],["path",{"d":"m21.11 9.85-2.25-2.26H17.6c-0.54 0-1.080.22-1.450.61l-3 3c-0.280.28-0.650.42-1.020.42a1.5 1.5 0 0 1-1.02-0.42L8.09 8.17c-0.38-0.38-0.9-0.6-1.45-0.6H5.17l-2.29 2.3a3 3 0 0 0 0 4.24l2.29 2.3h1.48c0.54 0 1.06-0.22 1.45-0.6l3.02-3.02c0.28-0.280.65-0.42 1.02-0.42s0.740.14 1.020.42l3.01 3.01c0.380.380.90.6 1.450.6h1.26l2.25-2.26a3.04 3.04 0 0 0-0.02-4.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsPix;
