import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-kagi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiKagi {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.48 18.39h-5.11c-1.38 0-1.62-1.51-1.38-2.110.12-0.30.42-0.720.66-1.030.960.54 2.10.84 3.310.84 3.85 0 6.91-3.14 6.91-6.93 0-2.05-0.9-3.86-2.28-5.19l0.18-0.18c0.36-0.360.9-0.6 1.44-0.54l0.840.06V0h-1.44c-1.68 0-3.07 1.03-3.67 2.47-0.6-0.18-1.26-0.3-1.92-0.3-3.85 0-6.91 3.14-6.91 6.93 0 1.510.48 2.95 1.32 4.1-0.120.12-0.30.24-0.420.3l-0.180.18c-1.38 1.33-2.04 3.02-1.68 4.940.18 1.02 1.08 2.11 1.98 2.710.60.42 1.380.6 2.160.6l5.77-0.24c0.66 0 1.260.3 1.620.9L16.41 24l3.55-1.21-0.6-1.33c-0.9-1.87-2.76-3.08-4.87-3.08M12.02 5.85c1.8 0 3.31 1.51 3.31 3.32s-1.5 3.32-3.31 3.32-3.31-1.51-3.31-3.32c0-1.87 1.44-3.32 3.31-3.32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiKagi;
