import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-arrow-down-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoArrowDownSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polyline",{"points":"112 268 256 412 400 268","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"48"}],["line",{"x1":"256","y1":"392","x2":"256","y2":"100","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"48"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoArrowDownSharp;
