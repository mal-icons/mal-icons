import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-help-buoy-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoHelpBuoyOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"256","cy":"256","r":"208","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["circle",{"cx":"256","cy":"256","r":"80","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"208","y1":"54","x2":"216","y2":"186","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"296","y1":"186","x2":"304","y2":"54","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"208","y1":"458","x2":"216","y2":"326","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"296","y1":"326","x2":"304","y2":"458","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"458","y1":"208","x2":"326","y2":"216","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"326","y1":"296","x2":"458","y2":"304","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"54","y1":"208","x2":"186","y2":"216","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"186","y1":"296","x2":"54","y2":"304","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoHelpBuoyOutline;
