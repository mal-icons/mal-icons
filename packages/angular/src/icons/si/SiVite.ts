import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-vite",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVite {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.06 23.24a0.570.57 0 0 1-1.02-0.35v-5.2c0-0.63-0.51-1.14-1.14-1.14H5.15a0.570.57 0 0 1-0.46-0.9l3.78-5.29c0.54-0.75 0-1.8-0.93-1.8H0.57a0.570.57 0 0 1-0.54-0.750.60.6 0 0 1 0.08-0.16L5.010.78a0.570.57 0 0 1 0.47-0.24h14.59a0.570.57 0 0 1 0.470.9l-3.78 5.29c-0.540.76 0 1.810.93 1.81h5.75c0.24 0 0.420.140.510.32a0.560.56 0 0 1-0.060.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVite;
