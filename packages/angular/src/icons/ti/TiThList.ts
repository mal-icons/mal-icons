import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-th-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiThList {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 17h-7c-1.1 0-2 0.9-2 2s0.9 2 2 2h7c1.1 0 2-0.9 2-2s-0.9-2-2-2zM19 10h-7c-1.1 0-2 0.9-2 2s0.9 2 2 2h7c1.1 0 2-0.9 2-2s-0.9-2-2-2zM19 3h-7c-1.1 0-2 0.9-2 2s0.9 2 2 2h7c1.1 0 2-0.9 2-2s-0.9-2-2-2z"}],["circle",{"cx":"5","cy":"19","r":"2.5"}],["circle",{"cx":"5","cy":"12","r":"2.5"}],["circle",{"cx":"5","cy":"5","r":"2.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiThList;
