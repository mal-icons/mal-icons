import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-server-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoServerOutline {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["ellipse",{"cx":"256","cy":"112","rx":"176","ry":"80","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}],["path",{"d":"M432 112C432 112 432 376.06 432 400C432 444.18 353.2 480 256 480C158.8 480 80 444.18 80 400C80 378.17 80 112 80 112","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}],["path",{"d":"M432 256C432 300.18 353.2 336 256 336C158.8 336 80 300.18 80 256","stroke":"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoServerOutline;
