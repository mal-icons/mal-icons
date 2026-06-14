import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-x-circle-fill-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcXCircleFill16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.34 13.66A8 8 0 1 1 13.66 2.34 8 8 0 0 1 2.34 13.66ZM6.03 4.97a0.750.75 0 0 0-1.040.020.750.75 0 0 0-0.02 1.04L6.94 8 4.97 9.97a0.750.75 0 0 0 0.33 1.270.750.75 0 0 0 0.73-0.21L8 9.06l1.97 1.97a0.750.75 0 0 0 1.27-0.330.750.75 0 0 0-0.21-0.73L9.06 8l1.97-1.97a0.750.75 0 0 0-0.33-1.270.750.75 0 0 0-0.730.22L8 6.94Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcXCircleFill16;
