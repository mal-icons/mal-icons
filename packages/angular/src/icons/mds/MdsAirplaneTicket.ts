import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-airplane-ticket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsAirplaneTicket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 4H2.01v6c1.1 0 1.990.9 1.99 2s-0.89 2-2 2v6h20V4zm-4.27 9.3-8.86 2.36-1.66-2.880.93-0.25 1.260.99 2.39-0.64-2.4-4.16 1.4-0.38 4.01 3.74 2.44-0.65a0.970.97 0 0 1 1.180.680.990.99 0 0 1-0.69 1.19z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsAirplaneTicket;
