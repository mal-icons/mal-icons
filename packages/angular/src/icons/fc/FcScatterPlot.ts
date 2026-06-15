import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-scatter-plot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcScatterPlot {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#CFD8DC","points":"9,39 9,6 7,6 7,41 42,41 42,39"}],["circle",{"fill":"#00BCD4","cx":"39","cy":"11","r":"3"}],["circle",{"fill":"#00BCD4","cx":"31","cy":"13","r":"3"}],["circle",{"fill":"#00BCD4","cx":"37","cy":"19","r":"3"}],["circle",{"fill":"#00BCD4","cx":"34","cy":"26","r":"3"}],["circle",{"fill":"#00BCD4","cx":"28","cy":"20","r":"3"}],["circle",{"fill":"#00BCD4","cx":"26","cy":"28","r":"3"}],["circle",{"fill":"#00BCD4","cx":"20","cy":"23","r":"3"}],["circle",{"fill":"#00BCD4","cx":"21","cy":"33","r":"3"}],["circle",{"fill":"#00BCD4","cx":"14","cy":"30","r":"3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcScatterPlot;
