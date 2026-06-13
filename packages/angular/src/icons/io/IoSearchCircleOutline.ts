import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-search-circle-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoSearchCircleOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["path",{"d":"M232,160a72,72,0,1,0,72,72A72,72,0,0,0,232,160Z","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["line",{"x1":"283.64","y1":"283.64","x2":"336","y2":"336","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoSearchCircleOutline;
