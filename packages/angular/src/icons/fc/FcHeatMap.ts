import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-fc-heat-map",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class FcHeatMap {
  readonly viewBox = "0 0 48 48";
  readonly nodes: NodeTuple[] = [["polygon",{"fill":"#CFD8DC","points":"9,39 9,6 7,6 7,41 42,41 42,39"}],["circle",{"fill":"#00BCD4","cx":"14","cy":"11","r":"2"}],["circle",{"fill":"#00BCD4","cx":"32","cy":"11","r":"2"}],["circle",{"fill":"#00BCD4","cx":"39","cy":"11","r":"2"}],["circle",{"fill":"#00BCD4","cx":"23","cy":"11","r":"4"}],["circle",{"fill":"#00BCD4","cx":"14","cy":"33","r":"2"}],["circle",{"fill":"#00BCD4","cx":"30","cy":"33","r":"2"}],["circle",{"fill":"#00BCD4","cx":"22","cy":"33","r":"3"}],["circle",{"fill":"#00BCD4","cx":"38","cy":"33","r":"4"}],["circle",{"fill":"#00BCD4","cx":"14","cy":"22","r":"2"}],["circle",{"fill":"#00BCD4","cx":"39","cy":"22","r":"2"}],["circle",{"fill":"#00BCD4","cx":"32","cy":"22","r":"3"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default FcHeatMap;
