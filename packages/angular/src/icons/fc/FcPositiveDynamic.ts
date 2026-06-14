import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-positive-dynamic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcPositiveDynamic {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["rect",{"fill":"#00BCD4","x":"19","y":"22","width":"10","height":"20"}],["rect",{"fill":"#00BCD4","x":"32","y":"8","width":"10","height":"34"}],["rect",{"fill":"#00BCD4","x":"6","y":"30","width":"10","height":"12"}],["polygon",{"fill":"#3F51B5","points":"11,8 21,18 21,8"}],["rect",{"fill":"#3F51B5","x":"11","y":"8.9","transform":"matrix(-.707 -.707 .707 -.707 10.879 36.506)","width":"4","height":"14.1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcPositiveDynamic;
