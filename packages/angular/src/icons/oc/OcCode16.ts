import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-code-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcCode16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"m11.28 3.22 4.25 4.25a0.750.75 0 0 1 0 1.06l-4.25 4.25a0.750.75 0 0 1-1.27-0.330.750.75 0 0 1 0.22-0.73L13.94 8l-3.72-3.72a0.750.75 0 0 1 0.33-1.270.750.75 0 0 1 0.730.22Zm-6.56 0a0.750.75 0 0 1 1.040.020.750.75 0 0 1 0.02 1.04L2.06 8l3.72 3.72a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21L0.47 8.53a0.750.75 0 0 1 0-1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcCode16;
