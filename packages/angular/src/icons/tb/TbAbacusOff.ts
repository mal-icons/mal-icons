import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-abacus-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAbacusOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 5v16"}],["path",{"d":"M19 21v-2m0 -4v-12"}],["path",{"d":"M5 7h2m4 0h8"}],["path",{"d":"M5 15h10"}],["path",{"d":"M8 13v4"}],["path",{"d":"M11 13v4"}],["path",{"d":"M16 16v1"}],["path",{"d":"M14 5v4"}],["path",{"d":"M11 5v2"}],["path",{"d":"M8 8v1"}],["path",{"d":"M3 21h18"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAbacusOff;
