import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-hotelsdotcom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiHotelsdotcom {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.06 0H4.94a4.94 4.94 0 0 0-4.93 4.93V19.06A4.94 4.94 0 0 0 4.93 24h14.13a4.93 4.93 0 0 0 4.93-4.94V4.93A4.93 4.93 0 0 0 19.07 0zM8.55 10.63v2.33a0.320.32 0 0 1-0.340.34H5.88a0.320.32 0 0 1-0.34-0.34V10.63c0-0.20.14-0.340.34-0.34h2.34c0.2 0 0.340.140.340.34h-0.01zm5.16 7.49a0.320.32 0 0 1-0.340.34h-2.33a0.320.32 0 0 1-0.34-0.34v-2.33c0-0.20.14-0.340.34-0.34h2.33c0.19 0 0.340.140.340.34v2.33zm0-5.16a0.320.32 0 0 1-0.340.34h-2.33a0.320.32 0 0 1-0.34-0.34V10.63c0-0.20.14-0.340.34-0.34h2.33c0.2 0 0.340.140.340.34v2.33zm5.97 4.37a0.650.65 0 0 1-0.220.52l-2.31 2.3c-0.180.17-0.430.05-0.43-0.2V7.28H4.06c-0.25 0-0.37-0.26-0.2-0.43L6.17 4.55c0.14-0.150.27-0.230.51-0.23h11.47c0.85 0 1.540.69 1.54 1.54V17.33z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiHotelsdotcom;
