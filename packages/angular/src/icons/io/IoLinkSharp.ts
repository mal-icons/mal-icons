import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-link-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoLinkSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200.66,352H144a96,96,0,0,1,0-192h55.41","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"48"}],["path",{"d":"M312.59,160H368a96,96,0,0,1,0,192H311.34","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"48"}],["line",{"x1":"169.07","y1":"256","x2":"344.93","y2":"256","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"48"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoLinkSharp;
