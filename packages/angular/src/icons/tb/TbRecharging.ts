import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-recharging",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbRecharging {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.04 4.5a9 9 0 0 0 -2.49 2.47"}],["path",{"d":"M3.19 10.21a9 9 0 0 0 0 3.51"}],["path",{"d":"M4.5 16.96a9 9 0 0 0 2.47 2.5"}],["path",{"d":"M10.21 20.81a9 9 0 0 0 3.5 0"}],["path",{"d":"M16.96 19.5a9 9 0 0 0 2.5 -2.47"}],["path",{"d":"M20.81 13.79a9 9 0 0 0 0 -3.51"}],["path",{"d":"M19.5 7.04a9 9 0 0 0 -2.47 -2.49"}],["path",{"d":"M13.79 3.19a9 9 0 0 0 -3.51 -0.02"}],["path",{"d":"M12 8l-2 4h4l-2 4"}],["path",{"d":"M12 21a9 9 0 0 0 0 -18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbRecharging;
