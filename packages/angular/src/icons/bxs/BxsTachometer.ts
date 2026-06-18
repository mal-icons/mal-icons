import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-tachometer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsTachometer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4C6.49 4 2 8.49 2 14a9.89 9.89 0 0 0 1.05 4.45c0.170.340.520.560.90.56h16.11c0.38 0 0.73-0.210.9-0.56A9.89 9.89 0 0 0 22 14c0-5.51-4.49-10-10-10zm5.02 5.02L13.06 15.06a1.53 1.53 0 0 1-2.120.44 1.53 1.53 0 0 1 0-2.56l6.04-3.96a0.030.03 0 0 1 0.050.010.030.03 0 0 1 0 0.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsTachometer;
