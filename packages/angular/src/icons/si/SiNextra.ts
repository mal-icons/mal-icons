import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nextra",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNextra {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.68 21.03c-4.98-4.98-4.98-13.08 0-18.06l0.98-0.98c0.22-0.220.34-0.510.34-0.82 0-0.31-0.12-0.6-0.34-0.82-0.44-0.44-1.21-0.44-1.65 0l-0.980.98c-4.98 4.98-13.08 4.98-18.06 0L1.990.34a1.17 1.17 0 0 0-1.65 0 1.17 1.17 0 0 0 0 1.65l0.980.98c4.98 4.98 4.98 13.08 0 18.06l-0.980.98c-0.220.22-0.340.51-0.340.83 0 0.310.120.60.340.820.440.44 1.210.44 1.65 0l0.98-0.98c4.98-4.98 13.08-4.98 18.06 0l0.980.98c0.220.220.510.340.820.340.31 0 0.61-0.120.82-0.340.22-0.220.34-0.510.34-0.82 0-0.31-0.12-0.6-0.34-0.82l-0.98-0.98z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNextra;
