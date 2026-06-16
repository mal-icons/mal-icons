import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-airplane-ticket",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdAirplaneTicket {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.19 4H4c-1.1 0-1.990.9-1.99 2v4c1.1 0 1.990.9 1.99 2s-0.89 2-2 2v4c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.81-2-1.81-2zM20 18H4v-2.54c1.19-0.69 2-1.99 2-3.46 0-1.48-0.8-2.77-1.99-3.46L4 6h16v12zM8.87 15.66l-1.66-2.880.93-0.25 1.260.99 2.39-0.64-2.4-4.16 1.4-0.38 4.01 3.74 2.44-0.65a0.970.97 0 0 1 1.180.680.990.99 0 0 1-0.69 1.19l-8.86 2.36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdAirplaneTicket;
