import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-skateboarding",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSkateboarding {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.5 15h3.5l0.75 -1.5"}],["path",{"d":"M14 19v-5l-2.5 -3l2.5 -4"}],["path",{"d":"M8 8l3 -1h4l1 3h3"}],["path",{"d":"M17.5 21a0.5 0.5 0 1 0 0 -1a0.5 0.5 0 0 0 0 1"}],["path",{"d":"M3 18c0 0.55 0.9 1 2 1h14c1.11 0 2 -0.45 2 -1"}],["path",{"d":"M6.5 21a0.5 0.5 0 1 0 0 -1a0.5 0.5 0 0 0 0 1"}],["path",{"d":"M14.01 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSkateboarding;
