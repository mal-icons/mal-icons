import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-database-search",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuDatabaseSearch {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 11.69V5"}],["path",{"d":"m22 22-1.87-1.87"}],["path",{"d":"M3 12a9 3 0 0 0 8.7 3"}],["path",{"d":"M3 5v14a9 3 0 0 0 9.28 3"}],["circle",{"cx":"18","cy":"18","r":"3"}],["ellipse",{"cx":"12","cy":"5","rx":"9","ry":"3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuDatabaseSearch;
