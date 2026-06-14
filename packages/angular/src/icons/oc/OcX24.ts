import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-x-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcX24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.72 5.72a0.750.75 0 0 1 1.06 0L12 10.94l5.22-5.22a0.750.75 0 0 1 1.270.330.750.75 0 0 1-0.210.73L13.06 12l5.22 5.22a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21L12 13.06l-5.22 5.22a0.750.75 0 0 1-1.04-0.020.750.75 0 0 1-0.02-1.04L10.94 12 5.72 6.78a0.750.75 0 0 1 0-1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcX24;
