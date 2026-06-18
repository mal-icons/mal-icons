import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-treadmill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbTreadmill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"}],["path",{"d":"M3 14l4 1l0.5 -0.5"}],["path",{"d":"M12 18v-3l-3 -2.92l0.75 -5.08"}],["path",{"d":"M6 10v-2l4 -1l2.5 2.5l2.5 0.5"}],["path",{"d":"M21 22a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1"}],["path",{"d":"M18 21l1 -11l2 -1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbTreadmill;
