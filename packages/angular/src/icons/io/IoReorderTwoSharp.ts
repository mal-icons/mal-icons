import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-reorder-two-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoReorderTwoSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["line",{"x1":"118","y1":"304","x2":"394","y2":"304","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"44"}],["line",{"x1":"118","y1":"208","x2":"394","y2":"208","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-linejoin":"round","stroke-width":"44"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoReorderTwoSharp;
