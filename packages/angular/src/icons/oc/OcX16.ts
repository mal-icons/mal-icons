import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-x-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcX16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.72 3.72a0.750.75 0 0 1 1.06 0L8 6.94l3.22-3.22a0.750.75 0 0 1 1.270.330.750.75 0 0 1-0.210.73L9.06 8l3.22 3.22a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21L8 9.06l-3.22 3.22a0.750.75 0 0 1-1.04-0.020.750.75 0 0 1-0.02-1.04L6.94 8 3.72 4.78a0.750.75 0 0 1 0-1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcX16;
