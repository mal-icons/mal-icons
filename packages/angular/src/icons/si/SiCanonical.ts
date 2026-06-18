import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-canonical",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCanonical {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.43 0v24h15.15V0Zm9.99 10.25a1.57 1.57 0 0 1 1.57 1.57 1.57 1.57 0 0 1-1.57 1.57 1.57 1.57 0 0 1-1.57-1.57 1.57 1.57 0 0 1 1.57-1.57zm-2.160.16c0.12 0 0.250.010.370.02a2.27 2.27 0 0 0-0.48 1.27 3.83 3.83 0 0 0-3.08 1.65 2.24 2.24 0 0 0-1.31-0.33 5.16 5.16 0 0 1 4.5-2.6zm4.24 2.3a5.14 5.14 0 0 1 0.74 3.91 5.14 5.14 0 0 1-1 2.11 2.25 2.25 0 0 0-0.75-1.17 3.84 3.84 0 0 0 0.13-3.82 2.26 2.26 0 0 0 0.88-1.03zm-8.620.98a1.57 1.57 0 0 1 1.57 1.57 1.57 1.57 0 0 1-1.57 1.57 1.57 1.57 0 0 1-1.57-1.57 1.57 1.57 0 0 1 1.57-1.57Zm0.93 3.62a3.82 3.82 0 0 0 2.6 1.99c0.130.030.260.050.390.060.010.480.170.930.46 1.31a5.16 5.16 0 0 1-1.11-0.11 5.11 5.11 0 0 1-3.67-3.08 2.26 2.26 0 0 0 1.34-0.16zm5.240.43a1.57 1.57 0 0 1 1.57 1.57 1.57 1.57 0 0 1-1.57 1.57A1.57 1.57 0 0 1 12.5 19.3a1.57 1.57 0 0 1 1.57-1.57z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCanonical;
