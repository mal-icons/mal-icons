import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-calendar-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoCalendarOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32","x":"48","y":"80","width":"416","height":"384","rx":"48"}],["circle",{"cx":"296","cy":"232","r":"24"}],["circle",{"cx":"376","cy":"232","r":"24"}],["circle",{"cx":"296","cy":"312","r":"24"}],["circle",{"cx":"376","cy":"312","r":"24"}],["circle",{"cx":"136","cy":"312","r":"24"}],["circle",{"cx":"216","cy":"312","r":"24"}],["circle",{"cx":"136","cy":"392","r":"24"}],["circle",{"cx":"216","cy":"392","r":"24"}],["circle",{"cx":"296","cy":"392","r":"24"}],["line",{"fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32","stroke-linecap":"round","x1":"128","y1":"48","x2":"128","y2":"80"}],["line",{"fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32","stroke-linecap":"round","x1":"384","y1":"48","x2":"384","y2":"80"}],["line",{"fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32","x1":"464","y1":"160","x2":"48","y2":"160"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoCalendarOutline;
