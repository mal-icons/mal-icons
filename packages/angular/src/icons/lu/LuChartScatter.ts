import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-lu-chart-scatter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LuChartScatter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"7.5","cy":"7.5","r":"0.5","fill":"currentColor"}],["circle",{"cx":"18.5","cy":"5.5","r":"0.5","fill":"currentColor"}],["circle",{"cx":"11.5","cy":"11.5","r":"0.5","fill":"currentColor"}],["circle",{"cx":"7.5","cy":"16.5","r":"0.5","fill":"currentColor"}],["circle",{"cx":"17.5","cy":"14.5","r":"0.5","fill":"currentColor"}],["path",{"d":"M3 3v16a2 2 0 0 0 2 2h16"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LuChartScatter;
