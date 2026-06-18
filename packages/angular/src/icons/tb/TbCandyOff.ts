import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-candy-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCandyOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.17 7.17l0.12 -0.12a2 2 0 0 1 2.83 0l2.83 2.83a2 2 0 0 1 0 2.83l-0.12 0.12m-2 2l-2.12 2.12a2 2 0 0 1 -2.83 0l-2.83 -2.83a2 2 0 0 1 0 -2.83l2.11 -2.11"}],["path",{"d":"M16.24 9.17l3.09 -0.77a1.5 1.5 0 0 0 0.7 -2.52l-2.22 -2.22a1.5 1.5 0 0 0 -2.44 0.47l-1.25 2.91"}],["path",{"d":"M9.17 16.24l-0.77 3.09a1.5 1.5 0 0 1 -2.52 0.7l-2.22 -2.22a1.5 1.5 0 0 1 0.47 -2.44l2.91 -1.25"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCandyOff;
