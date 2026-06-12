import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fi-watch",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FiWatch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"12","r":"7"}],["polyline",{"points":"12 9 12 12 13.5 13.5"}],["path",{"d":"M16.51 17.35l-0.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-0.35-3.83m0.01-10.7l0.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l0.35 3.83"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FiWatch;
