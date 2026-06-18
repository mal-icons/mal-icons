import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-monoprix",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiMonoprix {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.07 8.04C21.07 3.61 16.98 0 12 0 6.99 0 2.93 3.61 2.93 8.04S6.99 16.09 12 16.09c0.28 0 0.56-0.030.85-0.040.620.340.750.710.760.990.14 1.61-2.44 5.08-4.3 6.49l0.250.48c0.11-0.03 10.72-3.47 11.43-15.030.06-0.280.07-0.560.08-0.87v-0.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiMonoprix;
