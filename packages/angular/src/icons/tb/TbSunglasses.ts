import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-sunglasses",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbSunglasses {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4h-2l-3 10"}],["path",{"d":"M16 4h2l3 10"}],["path",{"d":"M10 16h4"}],["path",{"d":"M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"}],["path",{"d":"M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5"}],["path",{"d":"M4 14l4.5 4.5"}],["path",{"d":"M15 14l4.5 4.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbSunglasses;
