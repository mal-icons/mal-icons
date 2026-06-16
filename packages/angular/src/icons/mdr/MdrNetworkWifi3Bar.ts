import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-network-wifi-3-bar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrNetworkWifi3Bar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 4C7.7 4 3.78 5.60.79 8.240.35 8.630.32 9.30.73 9.71l10.56 10.58c0.390.39 1.020.39 1.42 0L23.27 9.71c0.41-0.410.38-1.08-0.06-1.47A16.87 16.87 0 0 0 12 4zM2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-2.85 2.86A10.95 10.95 0 0 0 12 10c-2.31 0-4.460.71-6.23 1.93L2.92 9.07z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrNetworkWifi3Bar;
