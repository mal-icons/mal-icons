import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-tablecheck",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTablecheck {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.91 3.83 7.250.16C7.130.04 6.880 6.710.04 3.75 1.36 1.38 3.720.04 6.67a0.450.45 0 0 0 0.120.53L3.83 10.87c0.120.120.370.080.41-0.12a7.91 7.91 0 0 1 2.22-4.33 7.91 7.91 0 0 1 4.33-2.22c0.17 0 0.25-0.250.12-0.37Zm9.27 7.08 3.67-3.66c0.12-0.120.17-0.370.12-0.53-1.32-2.96-3.68-5.33-6.63-6.67a0.450.45 0 0 0-0.29-0.030.450.45 0 0 0-0.250.15L13.14 3.83c-0.120.12-0.080.370.120.41a7.91 7.91 0 0 1 4.33 2.22 7.91 7.91 0 0 1 2.22 4.33c0 0.160.250.250.370.12Zm3.67 5.89L20.18 13.09c-0.12-0.12-0.37-0.08-0.410.12-0.53 3.34-3.17 6.01-6.55 6.55-0.20.04-0.290.29-0.120.41l3.67 3.66c0.120.120.370.170.530.12 2.95-1.32 5.31-3.68 6.63-6.630.12-0.210.08-0.41-0.08-0.54ZM3.83 13.090.16 16.8c-0.120.12-0.170.37-0.120.54 1.32 2.95 3.68 5.31 6.63 6.63a0.450.45 0 0 0 0.290.030.450.45 0 0 0 0.25-0.15l3.67-3.66c0.12-0.120.08-0.37-0.12-0.41-1.64-0.27-3.16-1.04-4.33-2.22a7.91 7.91 0 0 1-2.22-4.33c0-0.16-0.25-0.25-0.37-0.12h0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTablecheck;
