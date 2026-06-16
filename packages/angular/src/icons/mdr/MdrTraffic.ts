import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-traffic",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrTraffic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.96 10.59a0.510.51 0 0 0-0.5-0.59H17V8.86a4.01 4.01 0 0 0 2.96-3.270.510.51 0 0 0-0.5-0.59H17V4c0-0.55-0.45-1-1-1H8c-0.55 0-1 0.45-1 1v1H4.54c-0.31 0-0.540.28-0.50.59A4.01 4.01 0 0 0 7 8.86V10H4.54c-0.31 0-0.540.28-0.50.59A4.01 4.01 0 0 0 7 13.86V15H4.54c-0.31 0-0.540.28-0.50.59A4.01 4.01 0 0 0 7 18.86V20c0 0.550.45 1 1 1h8c0.55 0 1-0.45 1-1v-1.14a4.01 4.01 0 0 0 2.96-3.270.510.51 0 0 0-0.5-0.59H17v-1.14a4.01 4.01 0 0 0 2.96-3.27zM12 19a2 2 0 1 10-4A2 2 0 0 1 12 19zm0-5a2 2 0 1 10-4A2 2 0 0 1 12 14zm0-5a2 2 0 0 1-2-2c0-1.110.89-2 2-2a2 2 0 1 1 0 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrTraffic;
