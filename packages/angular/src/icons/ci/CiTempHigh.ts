import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-temp-high",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiTempHigh {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Temp High"}],["path",{"d":"M14.86,13.4V4.94a2.93,2.93,0,0,0-0.84-2.03,2.86,2.86,0,0,0-2.23-0.82,2.95,2.95,0,0,0-2.66,3l0.01,8.28a4.76,4.76,0,0,0,1.9,8.46,5.09,5.09,0,0,0,0.950.09,4.76,4.76,0,0,0,4.76-4.75A4.68,4.68,0,0,0,14.86,13.4Zm-0.48,6.66a3.78,3.78,0,0,1-3.150.78,3.7,3.7,0,0,1-2.92-2.98,3.75,3.75,0,0,1,1.43-3.690.960.96,0,0,0,0.39-0.77V5.09a1.97,1.97,0,0,1,1.73-2,0.660.66,0,0,1,0.14-0.01,1.88,1.88,0,0,1,1.86,1.86V13.4a0.960.96,0,0,0,0.390.77,3.74,3.74,0,0,1,0.13,5.89Z"}],["path",{"d":"M13.89,17.17a1.89,1.89,0,0,1-3.78,0,1.86,1.86,0,0,1,1.39-1.81V5.4a0.50.5,0,0,1,1,0v9.96A1.87,1.87,0,0,1,13.89,17.17Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiTempHigh;
