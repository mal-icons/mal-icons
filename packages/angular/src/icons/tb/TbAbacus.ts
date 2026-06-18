import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-abacus",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbAbacus {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 3v18"}],["path",{"d":"M19 21v-18"}],["path",{"d":"M5 7h14"}],["path",{"d":"M5 15h14"}],["path",{"d":"M8 13v4"}],["path",{"d":"M11 13v4"}],["path",{"d":"M16 13v4"}],["path",{"d":"M14 5v4"}],["path",{"d":"M11 5v4"}],["path",{"d":"M8 5v4"}],["path",{"d":"M3 21h18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbAbacus;
