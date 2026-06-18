import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-scuba-diving-tank",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbScubaDivingTank {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 11a4 4 0 1 1 8 0v5h-8l0 -5"}],["path",{"d":"M8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-3"}],["path",{"d":"M9 4h6"}],["path",{"d":"M12 7v-3"}],["path",{"d":"M7 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M11.5 4a0.5 0.5 0 1 0 1 0a0.5 0.5 0 1 0 -1 0","fill":"currentColor"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbScubaDivingTank;
