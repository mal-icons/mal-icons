import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-bluetooth-searching",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrBluetoothSearching {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m15.98 10.28-1.38 1.38c-0.20.2-0.20.51 0 0.71l1.38 1.38c0.280.280.750.150.85-0.230.11-0.50.17-1 0.17-1.52a6 6 0 0 0-0.18-1.480.50.5 0 0 0-0.84-0.24zm4.12-2.5a0.860.86 0 0 0-1.4-0.24c-0.260.26-0.310.64-0.170.980.46 1.070.72 2.240.72 3.47 0 1.24-0.26 2.42-0.73 3.49a0.840.84 0 0 0 0.160.940.840.84 0 0 0 1.35-0.23c0.63-1.30.98-2.760.98-4.3a9.99 9.99 0 0 0-0.91-4.11zM11.41 12 15 8.42c0.39-0.390.39-1.02 0-1.42l-4.29-4.29c-0.63-0.63-1.71-0.19-1.710.7v6.18L5.11 5.7A11 0 1 0 3.7 7.11L8.59 12 3.7 16.89a11 0 1 0 1.41 1.41L9 14.41v6.18c0 0.89 1.08 1.34 1.710.71L15 17c0.39-0.390.39-1.02 0-1.42L11.41 12zM11 5.83l1.88 1.88L11 9.59V5.83zm0 12.34v-3.76l1.88 1.88L11 18.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrBluetoothSearching;
