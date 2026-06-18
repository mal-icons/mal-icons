import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-jacket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbJacket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 3l-4 5l-4 -5"}],["path",{"d":"M12 19a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-8.17a2 2 0 0 1 0.59 -1.41l0.83 -0.83a2 2 0 0 0 0.59 -1.41v-2.17a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2.17a2 2 0 0 0 0.59 1.41l0.83 0.83a2 2 0 0 1 0.59 1.41v8.17a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2"}],["path",{"d":"M20 13h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3"}],["path",{"d":"M4 17h3a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3"}],["path",{"d":"M12 19v-11"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbJacket;
