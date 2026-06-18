import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-libretube",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiLibretube {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.12 0c-0.270-0.510.22-0.510.52v5c0 0.190.10.360.260.45l9.88 5.58c0.350.20.350.71 0 0.91L1.87 18.03a0.520.52 0 0 0-0.260.45v5c0 0.40.440.650.780.45L22.21 12.31a0.380.38 0 0 00-0.65L2.390.07A0.520.52 0 0 0 2.12 0zm0 7.95c-0.270.01-0.510.22-0.510.52v7.06c0 0.40.430.650.780.45l6.22-3.53c0.35-0.20.35-0.7 0-0.9l-6.22-3.53a0.520.52 0 0 0-0.27-0.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiLibretube;
