import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-trainerroad",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiTrainerroad {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.29 14.04c0.16-0.060.44-0.20.51-0.23 1.11-0.56 1.92-1.22 2.42-1.970.53-0.760.8-1.660.78-2.58 0-1.25-0.46-2.19-1.4-2.87-0.92-0.67-2.22-0.97-3.87-1.01H1.36L0 8.42h5.53c0.01 0 0.030.010.040.02a0.020.02 0 10.02L2.79 16.85h3.67c0.06 0 0.12-0.040.14-0.1l2.76-8.3a0.040.04 0 1.04-0.02l2.820c0.01 0 0.030.010.040.02a0.020.02 0 10.02L9.47 16.85h3.67c0.06 0 0.12-0.040.14-0.1l0.74-2.26a0.040.04 0 1.04-0.02s2.450.01 2.450c0.86 1.36 1.81 2.88 2.62 4.16l3.840c0.12 0 0.19-0.130.13-0.23l-2.83-4.32c-0.01-0.020.01-0.020.02-0.04zm-0.45-3.35c-0.440.41-1.180.61-2.160.61h-2.58l0.95-2.87 2.350c1.140.02 1.830.51 1.84 1.340.010.35-0.140.69-0.40.92z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiTrainerroad;
