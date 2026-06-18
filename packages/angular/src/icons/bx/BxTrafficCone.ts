import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-traffic-cone",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxTrafficCone {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.94 2.67A1 1 0 0 0 13 2h-2a1 1 0 0 0-0.940.67L4.29 19H2v2h20v-2h-2.29L13.94 2.67zM15.47 13H8.53l1.06-3h4.82l1.06 3zm-3.76-9h0.59l1.41 4h-3.41l1.41-4zM7.83 15h8.35l1.41 4H6.41l1.41-4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxTrafficCone;
