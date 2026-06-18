import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-users-group",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbUsersGroup {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"}],["path",{"d":"M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M17 10h2a2 2 0 0 1 2 2v1"}],["path",{"d":"M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M3 13v-1a2 2 0 0 1 2 -2h2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbUsersGroup;
