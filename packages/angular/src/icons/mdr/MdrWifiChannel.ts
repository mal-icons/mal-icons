import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-wifi-channel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrWifiChannel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.13 21c0.5 0 0.92-0.380.99-0.870.65-4.89 1.95-9.01 2.88-10 0.910.98 2.19 5.01 2.86 9.820.080.60.59 1.05 1.19 1.050.54 0 1.02-0.36 1.16-0.890.62-2.38 1.9-5.11 2.79-5.110.9 0 2.19 2.83 2.81 5.20.120.480.560.8 1.050.80.62 0 1.12-0.52 1.09-1.14C20.75 15.89 19.81 3 16 3c-2.51 0-3.77 5.61-4.4 10.57C10.79 10.66 9.61 8 8 8c-2.92 0-4.41 8.71-4.85 11.87-0.090.60.38 1.130.98 1.13zM16 13c-0.99 0-1.820.62-2.5 1.50.57-4.77 1.54-8.62 2.5-9.440.970.81 1.91 4.67 2.49 9.43C17.81 13.62 16.98 13 16 13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrWifiChannel;
