import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-watch-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoWatchOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"112","y":"112","width":"288","height":"288","rx":"64","ry":"64","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["path",{"d":"M176,112V40a8,8,0,0,1,8-8H328a8,8,0,0,1,8,8v72","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}],["path",{"d":"M336,400v72a8,8,0,0,1-8,8H184a8,8,0,0,1-8-8V400","fill":"none","stroke":"currentColor","stroke-linejoin":"round","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoWatchOutline;
