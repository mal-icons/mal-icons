import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-local-airport",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrLocalAirport {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.48 13.7 13.5 9V3.5c0-0.83-0.67-1.5-1.5-1.5s-1.50.67-1.5 1.5V9l-7.98 4.7c-0.320.18-0.520.53-0.520.9 0 0.70.67 1.2 1.34 1.01l7.16-2.1V19l-2.26 1.35c-0.150.09-0.240.26-0.240.43v0.58c0 0.330.310.570.620.49l2.92-0.73L12 21l0.380.090.420.11 1.90.480.670.17c0.320.080.62-0.160.62-0.49v-0.58c0-0.18-0.09-0.34-0.24-0.43L13.5 19v-5.5l7.16 2.1c0.670.2 1.34-0.3 1.34-1 0-0.37-0.2-0.72-0.52-0.9z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrLocalAirport;
