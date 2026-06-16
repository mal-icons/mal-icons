import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-device-unknown",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDeviceUnknown {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 1H7c-1.1 0-2 0.9-2 2v18c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm0 18H7V5h10v14zm-6-3h2v2h-2zm-1.48-5.81h0.13c0.33 0 0.59-0.230.7-0.540.24-0.690.91-1.21 1.66-1.210.93 0 1.750.82 1.75 1.75 0 1.32-1.49 1.55-2.23 2.82h-0.01c-0.080.14-0.140.29-0.20.45-0.010.02-0.020.03-0.020.05-0.010.02-0.010.04-0.010.05-0.10.31-0.160.66-0.16 1.08h1.76c0-0.250.04-0.470.12-0.670.54-1.47 2.77-1.86 2.48-4.18-0.19-1.55-1.43-2.84-2.98-3.04-1.77-0.23-3.290.78-3.81 2.3-0.20.560.23 1.140.82 1.14z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDeviceUnknown;
