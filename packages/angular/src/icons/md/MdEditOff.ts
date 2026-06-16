import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-edit-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdEditOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m14.06 9.020.920.92-1.11 1.11 1.41 1.41 2.52-2.52-3.75-3.75-2.52 2.52 1.41 1.41 1.12-1.1zm6.65-1.98a11 0 0 0 0-1.41l-2.34-2.34c-0.2-0.2-0.45-0.29-0.71-0.29s-0.510.1-0.70.29l-1.83 1.83 3.75 3.75 1.83-1.83zM2.81 2.81 1.39 4.22l7.32 7.32L3 17.25V21h3.75l5.71-5.71 7.32 7.32 1.41-1.41L2.81 2.81zM5.92 19H5v-0.92l5.13-5.130.920.92L5.92 19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdEditOff;
