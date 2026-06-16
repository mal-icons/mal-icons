import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-ring-volume",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtRingVolume {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.6 17.22c0.660.37 1.280.79 1.87 1.27l1.07-1.07c-0.91-0.75-1.9-1.38-2.94-1.9v1.7zM3.53 18.5c0.58-0.47 1.21-0.89 1.87-1.27v-1.71a15.13 15.13 0 0 0-2.95 1.9l1.08 1.08z","opacity":".3"}],["path",{"d":"M12 12C7.46 12 3.34 13.780.29 16.67c-0.180.18-0.290.43-0.290.71 0 0.280.110.530.290.71l2.48 2.48c0.180.180.430.290.710.290.27 0 0.52-0.110.7-0.280.79-0.74 1.69-1.36 2.66-1.850.33-0.160.56-0.50.56-0.9v-3.1c1.45-0.48 3-0.73 4.6-0.73 1.6 0 3.150.25 4.60.72v3.1c0 0.390.230.740.560.90.980.49 1.87 1.12 2.66 1.850.180.180.430.280.70.280.28 0 0.53-0.110.71-0.29l2.48-2.48c0.18-0.180.29-0.430.29-0.71a0.990.99 0 0 0-0.29-0.7A16.97 16.97 0 0 0 12 12zm-6.6 5.23c-0.660.37-1.290.8-1.87 1.27l-1.07-1.07c0.91-0.75 1.9-1.39 2.95-1.9v1.7zm15.07 1.26c-0.59-0.48-1.21-0.9-1.87-1.27v-1.7c1.040.51 2.03 1.15 2.94 1.9l-1.07 1.07zM16.19 8.4l1.41 1.41s3.45-3.52 3.56-3.55l-1.41-1.41-3.56 3.55zM11 2h2v5h-2zM6.4 9.81 7.81 8.4 4.26 4.84 2.84 6.26c0.110.03 3.56 3.55 3.56 3.55z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtRingVolume;
