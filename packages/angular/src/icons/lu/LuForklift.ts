import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-forklift",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuForklift {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 12H5a2 2 0 0 0-2 2v5"}],["path",{"d":"M15 19h7"}],["path",{"d":"M16 19V2"}],["path",{"d":"M6 12V7a2 2 0 0 1 2-2h2.17a2 2 0 0 1 1.410.59l3.83 3.83A2 2 0 0 1 16 10.83"}],["path",{"d":"M7 19h4"}],["circle",{"cx":"13","cy":"19","r":"2"}],["circle",{"cx":"5","cy":"19","r":"2"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuForklift;
