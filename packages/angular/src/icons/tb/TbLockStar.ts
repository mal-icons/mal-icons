import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-lock-star",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLockStar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 21h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h9"}],["path",{"d":"M8 11v-4a4 4 0 1 1 8 0v4"}],["path",{"d":"M17.8 20.82l-2.17 1.14a0.39 0.39 0 0 1 -0.57 -0.41l0.42 -2.41l-1.76 -1.71a0.39 0.39 0 0 1 0.22 -0.66l2.43 -0.35l1.09 -2.19a0.39 0.39 0 0 1 0.7 0l1.09 2.19l2.43 0.35a0.39 0.39 0 0 1 0.22 0.67l-1.76 1.71l0.41 2.41a0.39 0.39 0 0 1 -0.57 0.41l-2.17 -1.14"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLockStar;
