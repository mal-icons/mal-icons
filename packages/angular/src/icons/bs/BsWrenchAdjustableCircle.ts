import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-wrench-adjustable-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsWrenchAdjustableCircle {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.5 8a4.5 4.5 0 0 1-1.7 3.53L9.5 8.5l2.96-1.11q0.040.30.040.61"}],["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.2 3.25l1.99-1.66a4.5 4.5 0 0 1 7.54-4.62L7.5 6.5l1 2.5 1.33 3.11c-0.560.25-1.180.39-1.830.39a4.5 4.5 0 0 1-1.59-0.29L4.75 14.2A7 7 0 0 0 15 8m-8.290.14a0.250.25 0 0 0-0.29-0.38l-1.50.50.160.470.81-0.27-0.590.89a0.250.25 0 0 0 0.290.38l0.81-0.27-0.590.89a0.250.25 0 0 0 0.290.38l1.5-0.5-0.16-0.47-0.810.270.6-0.89a0.250.25 0 0 0-0.29-0.38l-0.810.27z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsWrenchAdjustableCircle;
