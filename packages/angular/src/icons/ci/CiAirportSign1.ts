import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ci-airport-sign-1",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CiAirportSign1 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"data-name":"Airport Sign 1"}],["path",{"d":"M13.11,12.61v2.28a0.120.12,0,0,0,0.060.11l0.620.36a0.490.49,0,0,1,0.240.37l0.050.41a0.240.24,0,0,1-0.310.26l-1.64-0.46a0.490.49,0,0,0-0.26,0l-1.640.46a0.240.24,0,0,1-0.31-0.26l0.05-0.41a0.490.49,0,0,1,0.24-0.36l0.62-0.35a0.120.12,0,0,0,0.06-0.1V12.61a0.120.12,0,0,0-0.14-0.12l-3.480.44A0.240.24,0,0,1,7,12.68v-0.62a0.490.49,0,0,1,0.32-0.45l3.5-1.31a0.120.12,0,0,0,0.08-0.11V9.44a4.76,4.76,0,0,1,0.1-0.98h0a1.01,1.01,0,0,1,1.2-0.83,1.06,1.06,0,0,1,0.820.9l0.020.09a6.3,6.3,0,0,1,0.080.98v0.59a0.120.12,0,0,0,0.080.11l3.5,1.31a0.490.49,0,0,1,0.320.46v0.62a0.240.24,0,0,1-0.270.24l-3.48-0.43A0.120.12,0,0,0,13.11,12.61Z"}],["path",{"d":"M12,21.93A9.93,9.93,0,1,1,21.93,12,9.94,9.94,0,0,1,12,21.93ZM12,3.07A8.93,8.93,0,1,0,20.93,12,8.94,8.94,0,0,0,12,3.07Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CiAirportSign1;
