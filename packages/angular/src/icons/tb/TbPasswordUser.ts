import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-password-user",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbPasswordUser {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 17v4"}],["path",{"d":"M10 20l4 -2"}],["path",{"d":"M10 18l4 2"}],["path",{"d":"M5 17v4"}],["path",{"d":"M3 20l4 -2"}],["path",{"d":"M3 18l4 2"}],["path",{"d":"M19 17v4"}],["path",{"d":"M17 20l4 -2"}],["path",{"d":"M17 18l4 2"}],["path",{"d":"M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"}],["path",{"d":"M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbPasswordUser;
