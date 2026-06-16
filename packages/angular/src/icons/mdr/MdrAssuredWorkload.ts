import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-assured-workload",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAssuredWorkload {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 17c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1s-1 0.45-1 1v5c0 0.550.45 1 1 1zm6 0c0.55 0 1-0.45 1-1v-5c0-0.55-0.45-1-1-1s-1 0.45-1 1v5c0 0.550.45 1 1 1zm9.32-11.34L12.9 1.45c-0.56-0.28-1.23-0.28-1.79 0L2.68 5.66c-0.420.21-0.680.64-0.68 1.1C2 7.45 2.55 8 3.24 8h17.53C21.45 8 22 7.45 22 6.76c0-0.46-0.26-0.89-0.68-1.1zM2 20c0 0.550.45 1 1 1h11.4c-0.21-0.64-0.32-1.31-0.36-2H3c-0.55 0-1 0.45-1 1zm17-7.74V11c0-0.55-0.45-1-1-1s-1 0.45-1 1v2.26l2-1zm0.55 1.96-3 1.5c-0.340.17-0.550.52-0.550.9v1.93c0 2.52 1.71 4.88 4 5.45 2.29-0.57 4-2.93 4-5.45v-1.93c0-0.38-0.21-0.73-0.55-0.89l-3-1.5a0.990.99 0 0 0-0.9-0.01zm-0.97 6.08-0.8-0.8a0.750.75 0 0 1 0-1.06c0.29-0.290.77-0.29 1.06 0l0.440.44 1.88-1.85c0.29-0.290.77-0.29 1.06 0 0.290.290.290.77 0 1.06l-2.23 2.21a11 0 0 1-1.41 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAssuredWorkload;
