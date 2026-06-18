import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-mongoosedotws",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMongoosedotws {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 0a4.86 4.86 0 0 0-3.46 1.43L1.43 8.55a4.88 4.88 0 0 0-0.09 6.8L7.41 9.28a1.45 1.45 0 0 1 0.37-1.43 1.47 1.47 0 0 1 2.08 0c0.580.580.58 1.510.01 2.09-0.370.37-0.890.5-1.370.39l-6.1 6.1 6.15 6.15a4.89 4.89 0 0 0 6.910.01l6.24-6.24-2.95-2.95a1.45 1.45 0 0 1-1.43-0.37 1.47 1.47 0 0 1 0-2.08 1.47 1.47 0 0 1 2.09-0.01c0.370.370.50.890.39 1.37l2.96 2.96a4.87 4.87 0 0 0-0.18-6.71l-7.11-7.11A4.88 4.88 0 0 0 12 0Zm3.16 7.4c0.1200.240.010.360.040.260.050.510.190.710.390.190.190.320.410.370.66a1.43 1.43 0 0 1-0.36 1.43 1.47 1.47 0 0 1-1.370.39l-1.42 1.42a1.46 1.46 0 0 1-1.76 1.76 1.42 1.42 0 0 1-0.71-0.39 1.35 1.35 0 0 1-0.37-0.66A1.43 1.43 0 0 1 10.98 11a1.47 1.47 0 0 1 1.37-0.39l1.42-1.42a1.46 1.46 0 0 1 1.4-1.79zm0.030.73a0.740.74 0 0 0-0.52 1.250.740.74 0 0 0 1.050.010.740.74 0 0 0-0.01-1.050.730.73 0 0 0-0.52-0.21zm-6.370.02a0.740.74 0 0 0-0.52 1.250.740.74 0 0 0 1.050.010.740.74 0 0 0-0.01-1.040.730.73 0 0 0-0.52-0.21zm9.54 3.08a0.750.75 0 0 0-0.530.220.740.74 0 0 0 1.04 1.040.740.74 0 0 0 0.01-1.050.730.73 0 0 0-0.52-0.21zm-6.330.08a0.720.72 0 0 0-0.410.12 1.01 1.01 0 0 0-0.120.1c-0.040.04-0.060.08-0.090.12a0.740.74 0 0 0 0.10.930.740.74 0 0 0 1.04-1.040.740.74 0 0 0-0.52-0.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMongoosedotws;
