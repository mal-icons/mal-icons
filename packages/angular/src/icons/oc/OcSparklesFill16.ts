import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sparkles-fill-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSparklesFill16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.6 2.28a0.430.43 0 0 1 0.8 0l0.41 1.11a6.39 6.39 0 0 0 3.8 3.8l1.110.41a0.430.43 0 0 1 0 0.8l-1.110.41a6.39 6.39 0 0 0-3.8 3.8l-0.41 1.11a0.430.43 0 0 1-0.8 0l-0.41-1.11a6.39 6.39 0 0 0-3.8-3.8L4.28 8.4a0.430.43 0 0 1 0-0.8l1.11-0.41a6.39 6.39 0 0 0 3.8-3.8L9.6 2.28Zm-4.27 8.84a0.180.18 0 0 1 0.33 0l0.170.46a2.66 2.66 0 0 0 1.58 1.58l0.460.17a0.180.18 0 0 1 0 0.33l-0.460.17a2.66 2.66 0 0 0-1.58 1.58l-0.170.46a0.180.18 0 0 1-0.33 0l-0.17-0.46a2.66 2.66 0 0 0-1.58-1.58l-0.46-0.17a0.180.18 0 0 1 0-0.33l0.46-0.17a2.66 2.66 0 0 0 1.58-1.58l0.17-0.46ZM2.80.14a0.210.21 0 0 1 0.4 0l0.20.56a3.2 3.2 0 0 0 1.9 1.9l0.560.2a0.210.21 0 0 1 0 0.4l-0.560.2a3.2 3.2 0 0 0-1.9 1.9L3.2 5.86a0.210.21 0 0 1-0.4 0l-0.2-0.56A3.2 3.2 0 0 0 0.7 3.4L0.14 3.2a0.210.21 0 0 1 0-0.4l0.56-0.2A3.2 3.2 0 0 0 2.60.7L2.80.14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSparklesFill16;
