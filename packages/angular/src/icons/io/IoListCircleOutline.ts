import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-list-circle-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoListCircleOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["line",{"x1":"224","y1":"184","x2":"352","y2":"184","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"224","y1":"256","x2":"352","y2":"256","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["line",{"x1":"224","y1":"327","x2":"352","y2":"327","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["path",{"d":"M448,258c0-106-86-192-192-192S64,152,64,258s86,192,192,192S448,364,448,258Z","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["circle",{"cx":"168","cy":"184","r":"8","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["circle",{"cx":"168","cy":"257","r":"8","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}],["circle",{"cx":"168","cy":"328","r":"8","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoListCircleOutline;
