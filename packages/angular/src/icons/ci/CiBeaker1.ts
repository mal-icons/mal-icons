import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-beaker-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiBeaker1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Beaker 1"}],["path",{"d":"M19.45,18.65l-0.51-1.52a17.9,17.9,0,0,0-4.02-6.66,1.49,1.49,0,0,1-0.42-1.04V3.07H15a0.50.5,0,0,0,0-1H9a0.50.5,0,0,0,0,1h0.5v6.36a1.48,1.48,0,0,1-0.41,1.04,17.9,17.9,0,0,0-4.02,6.66l-0.52,1.52a2.5,2.5,0,0,0,2.37,3.29h10.16a2.5,2.5,0,0,0,2.37-3.29Zm-9.64-7.49a2.48,2.48,0,0,0,0.69-1.73V3.07h3v6.36a2.49,2.49,0,0,0,0.7,1.73,16.91,16.91,0,0,1,3.01,4.38H6.79A16.94,16.94,0,0,1,9.81,11.16Zm8.49,9.16a1.51,1.51,0,0,1-1.220.62H6.92a1.5,1.5,0,0,1-1.42-1.98l0.51-1.52q0.15-0.450.33-0.9h11.32q0.180.450.330.9l0.51,1.52A1.5,1.5,0,0,1,18.3,20.32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiBeaker1;
