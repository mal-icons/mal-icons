import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-atlassian",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiAtlassian {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.12 11.08a0.680.68 0 0-1.160.13L0.08 22.97a0.70.7 0 0.63 1.02h8.19a0.680.68 0 0.63-0.39c1.77-3.650.7-9.2-2.41-12.52zM11.430.39a15.52 15.52 0 0-0.91 15.32l3.95 7.9a0.70.7 0 0.630.39h8.19a0.70.7 0 0.63-1.02L12.630.38a0.660.66 0 0-1.20.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiAtlassian;
