import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-businessplan",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBusinessplan {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 6a5 3 0 1 0 10 0a5 3 0 1 0 -10 0"}],["path",{"d":"M11 6v4c0 1.66 2.24 3 5 3s5 -1.34 5 -3v-4"}],["path",{"d":"M11 10v4c0 1.66 2.24 3 5 3s5 -1.34 5 -3v-4"}],["path",{"d":"M11 14v4c0 1.66 2.24 3 5 3s5 -1.34 5 -3v-4"}],["path",{"d":"M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"}],["path",{"d":"M5 15v1m0 -8v1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBusinessplan;
