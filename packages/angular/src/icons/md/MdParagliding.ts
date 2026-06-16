import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-paragliding",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdParagliding {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 17c-1.1 0-2-0.9-2-2s0.9-2 2-2 2 0.9 2 2-0.9 2-2 2zm3.480.94C14.68 18.54 14 19 12 19s-2.68-0.46-3.48-1.06C8.04 17.55 7 16.76 7 14H5c0 2.70.93 4.41 2.3 5.50.50.4 1.10.7 1.70.9V24h6v-3.6c0.6-0.2 1.2-0.5 1.7-0.9 1.37-1.09 2.3-2.8 2.3-5.5h-2c0 2.76-1.04 3.55-1.52 3.94zM23 4.25v3.49c0 0.8-0.88 1.26-1.560.83-0.14-0.09-0.28-0.18-0.44-0.26L19 13h-2l-1.5-6.28a27.85 27.85 0 0 0-7 0L7 13H5L3 8.31c-0.160.08-0.30.17-0.440.26C1.88 9 1 8.55 1 7.74V4.25C1 1.9 5.92 0 12 0s11 1.9 11 4.25zM6.9 6.98c-0.930.19-1.780.43-2.530.71l1.51 3.55L6.9 6.98zm12.730.71c-0.75-0.28-1.6-0.52-2.53-0.71l1.02 4.25 1.51-3.54zM21 4.31C20.65 3.63 17.57 2 12 2S3.35 3.63 3 4.31v1.77C5.34 5.07 8.56 4.5 12 4.5s6.660.57 9 1.58V4.31z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdParagliding;
