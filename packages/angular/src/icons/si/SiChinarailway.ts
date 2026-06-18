import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-chinarailway",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiChinarailway {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.64 18.64a8.04 8.04 0 1 0-7.28 0l-1.48 1.93a10.44 10.44 0 0 1 3.14-19.34 1.04 1.04 0 0 1 0.94-1.19 11.48 11.48 0 0 1 2.09 0 1.04 1.04 0 0 1 0.94 1.19 10.44 10.44 0 0 1 3.14 19.34zm2.81 4.04a0.420.42 0 0 1 0.340.41V24H5.22v-0.91a0.420.42 0 0 1 0.34-0.41l4.44-0.89a1.46 1.46 0 0 0 1.17-1.43v-5.93a1.04 1.04 0 0 0-0.76-1l-2.06-0.59V10.94a1.46 1.46 0 0 1 1.35-1.46 29.22 29.22 0 0 1 4.61 0 1.46 1.46 0 0 1 1.35 1.46v1.9l-2.060.59a1.04 1.04 0 0 0-0.76 1v5.93a1.46 1.46 0 0 0 1.17 1.43z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiChinarailway;
