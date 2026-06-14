import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-heart-crack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuHeartCrack {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.41 5.82c-0.70.79-1.15 1.5-1.41 2.17l2.15 2.16a0.50.5 0 0 1 0 0.71l-2.29 2.29a0.50.5 0 0 0 0 0.71L12 15"}],["path",{"d":"M13.51 20.31a2 2 0 0 1-3 0.02L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.59-3.680.60.6 0 0 0 0.820A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuHeartCrack;
