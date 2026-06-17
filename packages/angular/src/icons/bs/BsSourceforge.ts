import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-sourceforge",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSourceforge {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9.13 8.43c0-2.6-0.93-3.79-1.42-4.24a0.140.14 0 0 0-0.230.12c0.1 1.47-1.76 1.84-1.76 4.14v0.01c0 1.4 1.07 2.55 2.38 2.55s2.38-1.15 2.38-2.55v-0.01c0-0.65-0.25-1.28-0.49-1.74-0.05-0.1-0.19-0.05-0.180.030.45 1.99-0.67 3.22-0.67 1.69Z"}],["path",{"d":"M6.3 13.92a0.250.25 0 0 1-0.16-0.07L0.06 7.79c-0.08-0.08-0.08-0.23 0-0.33l6.42-6.41A0.30.3 0 0 1 6.63 1h1.84c0.11 0 0.180.070.20.14a0.220.22 0 0 1-0.050.25L2.6 7.41a0.30.3 0 0 0 0 0.44l4.77 4.77c0.080.080.080.23 0 0.33l-0.910.93a0.30.3 0 0 1-0.150.05m1.22 1.06a0.220.22 0 0 1-0.15-0.38l6.04-6.02a0.320.32 0 0 0 0.1-0.220.270.27 0 0 0-0.1-0.22l-4.78-4.77c-0.08-0.08-0.08-0.23 0-0.33l0.93-0.93a0.230.23 0 0 1 0.16-0.07c0.07 0 0.110.040.150.08l6.07 6.07c0.040.040.070.10.070.16a0.230.23 0 0 1-0.070.16l-6.42 6.41A0.230.23 0 0 1 9.35 15H7.52z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSourceforge;
