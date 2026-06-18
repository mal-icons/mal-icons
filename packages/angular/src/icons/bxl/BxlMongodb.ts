import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-mongodb",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlMongodb {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.74 4.23c-0.84-1-1.57-2-1.71-2.22H12c-0.140.21-0.87 1.22-1.71 2.22-7.2 9.19 1.14 15.39 1.14 15.39l0.070.05c0.060.950.22 2.330.22 2.33h0.62s0.15-1.370.21-2.33l0.07-0.06s8.32-6.19 1.12-15.38zM12 19.48a3.48 3.48 0 0 1-0.48-0.48L12 9l0.45 10a3.57 3.57 0 0 1-0.450.48z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlMongodb;
