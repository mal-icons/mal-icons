import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-locate-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoLocateOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["line",{"x1":"256","y1":"96","x2":"256","y2":"56","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48"}],["line",{"x1":"256","y1":"456","x2":"256","y2":"416","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48"}],["path",{"d":"M256,112A144,144,0,1,0,400,256,144,144,0,0,0,256,112Z","fill":"none","stroke":"currentColor","stroke-miterlimit":"10","stroke-width":"32"}],["line",{"x1":"416","y1":"256","x2":"456","y2":"256","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48"}],["line",{"x1":"56","y1":"256","x2":"96","y2":"256","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"48"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoLocateOutline;
