import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-bar-chart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcBarChart {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["rect",{"fill":"#00BCD4","x":"19","y":"22","width":"10","height":"20"}],["rect",{"fill":"#00BCD4","x":"6","y":"12","width":"10","height":"30"}],["rect",{"fill":"#00BCD4","x":"32","y":"6","width":"10","height":"36"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcBarChart;
