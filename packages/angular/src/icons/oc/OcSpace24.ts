import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-space-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSpace24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.83 13.62a0.340.34 0 0 1 0.63 0l0.320.88a5.05 5.05 0 0 0 3.01 3.01l0.880.32a0.340.34 0 0 1 0 0.63l-0.880.32a5.05 5.05 0 0 0-3.01 3.01l-0.320.88a0.340.34 0 0 1-0.63 0l-0.32-0.88a5.05 5.05 0 0 0-3.01-3.01l-0.88-0.32a0.340.34 0 0 1 0-0.63l0.88-0.32a5.05 5.05 0 0 0 3.01-3.01l0.32-0.88Z"}],["path",{"d":"M2 19.25V4.75C2 3.78 2.78 3 3.75 3h4.97a1.75 1.75 0 0 1 1.450.77l1.4 2.06c0.050.070.130.110.210.11h8.47c0.97 0 1.750.78 1.75 1.75v5.78a0.750.75 0 0 1-1.5 0V7.69a0.250.25 0 0 0-0.25-0.25h-8.47a1.75 1.75 0 0 1-1.45-0.76L8.93 4.61a0.250.25 0 0 0-0.21-0.11H3.75a0.250.25 0 0 0-0.250.25v14.5c0 0.140.110.250.250.25H12a0.750.75 0 0 1 0 1.5H3.75A1.75 1.75 0 0 1 2 19.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSpace24;
