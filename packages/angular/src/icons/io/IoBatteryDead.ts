import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-battery-dead",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoBatteryDead {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["rect",{"x":"31","y":"144","width":"400","height":"224","rx":"45.7","ry":"45.7","fill":"none","stroke":"currentColor","stroke-linecap":"square","stroke-miterlimit":"10","stroke-width":"32"}],["line",{"x1":"479","y1":"218.67","x2":"479","y2":"293.33","fill":"none","stroke":"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoBatteryDead;
