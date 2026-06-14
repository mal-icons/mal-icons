import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-volleyball",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuVolleyball {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 7a16 16 20 0 1 10.98 4.36"}],["path",{"d":"M12 12a13 13 0 0 1-8.66 5"}],["path",{"d":"M16.83 13.63a16 16 0 0 1-9.27 7.33"}],["path",{"d":"M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10"}],["path",{"d":"M8.17 15.37a16 16 0 0 1-1.71-11.69"}],["circle",{"cx":"12","cy":"12","r":"10"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuVolleyball;
