import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-arrow-elbow-up-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhArrowElbowUpLeft {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M200,80V224a8,8,0,0,1-16,0V88H67.31l34.35,34.34a8,8,0,0,1-11.32,11.32l-48-48-0.06-0.07c-0.16-0.16-0.32-0.34-0.47-0.52l-0.23-0.31a3.71,3.71,0,0,1-0.23-0.32l-0.23-0.37a2.91,2.91,0,0,1-0.17-0.3c-0.07-0.12-0.13-0.25-0.19-0.38s-0.1-0.21-0.15-0.33-0.09-0.25-0.14-0.37l-0.13-0.36-0.09-0.39c0-0.13-0.07-0.25-0.1-0.37s0-0.31-0.06-0.46,0-0.21-0.05-0.32a8.34,8.34,0,0,1,0-1.58c0-0.11,0-0.210.05-0.32s0-0.310.06-0.460.06-0.240.1-0.37l0.09-0.390.13-0.36c0.05-0.120.09-0.250.14-0.37s0.1-0.220.15-0.330.12-0.260.19-0.38a2.91,2.91,0,0,1,0.17-0.3l0.23-0.37a3.71,3.71,0,0,1,0.23-0.32l0.23-0.31c0.15-0.180.31-0.360.47-0.52l0.06-0.07,48-48a8,8,0,0,1,11.32,11.32L67.31,72H192A8,8,0,0,1,200,80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhArrowElbowUpLeft;
