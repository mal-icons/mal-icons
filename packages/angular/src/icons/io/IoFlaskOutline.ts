import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-flask-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoFlaskOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["line",{"x1":"176","y1":"48","x2":"336","y2":"48","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}],["line",{"x1":"118","y1":"304","x2":"394","y2":"304","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}],["path",{"d":"M208,48v93.48a64.09,64.09,0,0,1-9.88,34.18L73.21,373.49C48.4,412.78,76.63,464,123.08,464H388.92c46.45,0,74.68-51.22,49.87-90.51L313.87,175.66A64.09,64.09,0,0,1,304,141.48V48","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoFlaskOutline;
