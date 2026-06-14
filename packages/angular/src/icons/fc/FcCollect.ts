import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-collect",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcCollect {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["rect",{"fill":"#009688","x":"22","y":"35","width":"4","height":"11"}],["polygon",{"fill":"#009688","points":"24,29.6 31,38 17,38"}],["rect",{"fill":"#009688","x":"22","y":"2","width":"4","height":"11"}],["polygon",{"fill":"#009688","points":"24,18.4 17,10 31,10"}],["rect",{"fill":"#009688","x":"2","y":"22","width":"11","height":"4"}],["polygon",{"fill":"#009688","points":"18.4,24 10,31 10,17"}],["rect",{"fill":"#009688","x":"35","y":"22","width":"11","height":"4"}],["polygon",{"fill":"#009688","points":"29.6,24 38,17 38,31"}],["circle",{"fill":"#F44336","cx":"24","cy":"24","r":"3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcCollect;
