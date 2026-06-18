import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-ski-jumping",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSkiJumping {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 17.5l-5 -4.5v-6l5 4"}],["path",{"d":"M7 17.5l5 -4.5"}],["path",{"d":"M15.1 21.58l6.76 -14.5a2 2 0 0 0 -0.97 -2.66"}],["path",{"d":"M8.9 21.58l-6.76 -14.5a2 2 0 0 1 0.97 -2.66"}],["path",{"d":"M7 11l5 -4"}],["path",{"d":"M10.01 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSkiJumping;
