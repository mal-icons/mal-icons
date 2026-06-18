import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-diaper",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbDiaper {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 8.32c0 -0.58 0 -0.87 0.04 -1.11a2.7 2.7 0 0 1 2.17 -2.17c0.24 -0.04 0.53 -0.04 1.11 -0.04h11.35c0.58 0 0.87 0 1.11 0.04a2.7 2.7 0 0 1 2.17 2.17c0.04 0.24 0.04 0.53 0.04 1.11v2.68a9 9 0 0 1 -18 0l0 -2.68"}],["path",{"d":"M17 9h4"}],["path",{"d":"M3 9h4"}],["path",{"d":"M14.25 19.7v-1.4a6.3 6.3 0 0 1 6.3 -6.3"}],["path",{"d":"M9.75 19.7v-1.4a6.3 6.3 0 0 0 -6.3 -6.3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbDiaper;
