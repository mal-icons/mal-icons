import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-wifi-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiWifiOn {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Wi-Fi On"}],["path",{"d":"M2.92,10.78a12.19,12.19,0,0,1,18.16-0.03c0.440.48,1.14-0.230.71-0.71a13.19,13.19,0,0,0-19.570.03c-0.430.480.27,1.180.710.71Z"}],["path",{"d":"M5.65,13.17a8.62,8.62,0,0,1,12.69-0.02c0.440.48,1.14-0.230.71-0.71a9.62,9.62,0,0,0-14.110.02c-0.430.470.27,1.180.710.71Z"}],["path",{"d":"M8.7,15.49a4.47,4.47,0,0,1,6.6-0.01c0.440.47,1.14-0.230.71-0.71a5.48,5.48,0,0,0-8.010.01c-0.430.470.27,1.180.710.71Z"}],["circle",{"cx":"12","cy":"17.17","r":"1.12"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiWifiOn;
