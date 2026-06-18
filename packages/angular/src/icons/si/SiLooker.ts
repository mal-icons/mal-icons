import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-looker",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLooker {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.95 0c-1.160-2.10.94-2.1 2.1a2.1 2.1 0 0.36 1.17l0.9-0.9a0.880.88 0 11.570.56l-0.890.9c0.960.65 2.260.4 2.91-0.560.65-0.960.4-2.26-0.56-2.91A2.1 2.1 0 11.95 0zm-0.83 6.11a3.26 3.26 0 0-0.65-1.96l-1.16 1.16a1.67 1.67 0 1-0.32 2.01l0.63 1.54a3.28 3.28 0 1.5-2.75zm-3.25 1.67h-0.03c-0.920-1.67-0.75-1.67-1.670-0.920.75-1.67 1.67-1.67a1.67 1.67 0 1.920.28l1.15-1.15c-1.41-1.14-3.47-0.93-4.610.48s-0.93 3.470.48 4.61a3.28 3.28 0 2.730.67l-0.63-1.54v0zm4.13 1.34c-0.73 0-1.450.11-2.150.32l0.92 2.25c2.69-0.68 5.420.94 6.1 3.630.68 2.69-0.94 5.42-3.63 6.1s-5.42-0.94-6.1-3.63c-0.57-2.240.47-4.58 2.5-5.66l-0.91-2.24c-3.69 1.81-5.22 6.27-3.41 9.96l00c1.81 3.69 6.27 5.22 9.96 3.41l00c3.69-1.81 5.22-6.26 3.41-9.96a7.44 7.44 0 0-6.69-4.17h-0.01l00z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLooker;
