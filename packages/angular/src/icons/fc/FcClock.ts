import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-clock",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcClock {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["circle",{"fill":"#00ACC1","cx":"24","cy":"24","r":"20"}],["circle",{"fill":"#eee","cx":"24","cy":"24","r":"16"}],["rect",{"x":"23","y":"11","width":"2","height":"13"}],["rect",{"x":"26.1","y":"22.7","transform":"matrix(-.707 .707 -.707 -.707 65.787 27.25)","width":"2.3","height":"9.2"}],["circle",{"cx":"24","cy":"24","r":"2"}],["circle",{"fill":"#00ACC1","cx":"24","cy":"24","r":"1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcClock;
