import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-pencil-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcPencil24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.26 2.18a1.75 1.75 0 0 1 2.47 0l2.59 2.59a1.75 1.75 0 0 1 0 2.47L19.53 10.03l-0.010.01L8.69 20.38a1.75 1.75 0 0 1-0.70.41l-5.52 1.68a0.750.75 0 0 1-0.75-0.190.750.75 0 0 1-0.19-0.75l1.67-5.5a1.75 1.75 0 0 1 0.47-0.76L14.48 4.96ZM4.71 16.36a0.260.26 0 0 0-0.070.11l-1.26 4.15 4.18-1.27a0.250.25 0 0 0 0.1-0.06l10.27-9.81-2.94-2.94-10.28 9.81ZM19 8.44l2.26-2.26a0.250.25 0 0 0 0-0.35l-2.59-2.59a0.250.25 0 0 0-0.35 0L16.06 5.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcPencil24;
