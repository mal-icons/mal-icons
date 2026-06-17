import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-wrench",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsWrench {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.1 2.22A3 3 0 0 0 3.78 5.9l6.34 6.25A3 3 0 0 0 13 16a3 3 0 1 0-0.85-5.88L5.9 3.78A3 3 0 0 0 2.220.1l2.14 2.14L4 4l-1.760.36zm13.37 9.020.530.030.290.450.450.290.030.53L15 13l-0.240.47-0.030.53-0.440.29-0.290.45-0.530.03L13 15l-0.47-0.24-0.53-0.03-0.29-0.44-0.44-0.29-0.03-0.53L11 13l0.24-0.470.03-0.530.45-0.290.29-0.440.53-0.03L13 11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsWrench;
