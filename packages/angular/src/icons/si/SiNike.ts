import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-nike",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiNike {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M24 7.8L6.44 15.28c-1.460.62-2.680.93-3.670.93-1.12 0-1.93-0.39-2.44-1.18-0.32-0.5-0.41-1.14-0.28-1.920.13-0.770.48-1.6 1.04-2.480.47-0.71 1.23-1.64 2.3-2.8a6.12 6.12 0 0-0.78 1.85c-0.28 1.2-0.03 2.070.76 2.630.370.260.890.39 1.540.390.52 0 1.11-0.08 1.76-0.25L24 7.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiNike;
