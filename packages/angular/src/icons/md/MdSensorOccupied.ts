import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-sensor-occupied",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdSensorOccupied {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4c0.55 0 1 0.45 1 1s-0.45 1-1 1-1-0.45-1-1 0.45-1 1-1zm0 5c-1.84 0-3.560.5-5.03 1.37-0.610.35-0.97 1.02-0.97 1.72V17h12v-1.91c0-0.7-0.36-1.36-0.97-1.72A9.84 9.84 0 0 0 12 12zm-3.86 3c1.18-0.65 2.51-1 3.86-1s2.680.35 3.85 1H8.14zm13.09-6.85 1.85-0.77A12.06 12.06 0 0 0 16.620.92l-0.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38zM8.15 2.77 7.380.92A12.09 12.09 0 0 0 0.92 7.38l1.850.77c1.02-2.42 2.96-4.36 5.38-5.38zM2.77 15.85l-1.850.77c1.22 2.91 3.55 5.25 6.46 6.46l0.77-1.85a10.12 10.12 0 0 1-5.38-5.38zm13.08 5.380.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-0.77a10.12 10.12 0 0 1-5.38 5.38z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdSensorOccupied;
