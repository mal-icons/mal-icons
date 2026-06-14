import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-cloud-storage-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiCloudStorageOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.5 9l-0.350.02c-0.82-2.37-3.31-4.01-5.9-4.01-3.31 0-6.25 2.69-6.25 6v0.13c-1 0.45-2.75 2.01-2.75 3.88 0 2.21 2.04 4 4.25 4h11c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8h-4.5v-3.79l2.15 2.15c0.10.10.230.150.350.15s0.26-0.050.35-0.15c0.2-0.190.2-0.51 0-0.71l-3-3-0.16-0.11c-0.12-0.05-0.26-0.05-0.38 0l-0.160.11-3 3c-0.190.2-0.190.51 0 0.710.10.10.230.150.350.15s0.26-0.050.35-0.15l2.15-2.15v3.79h-5.5c-1.1 0-2-0.9-2-2s0.9-2 1.91-2l1.420.02-0.25-1.2c-0.05-0.26-0.08-0.54-0.08-0.81 0-2.21 1.79-4 4-4 1.95 0 3.6 1.4 3.93 3.33l0.19 1.1 1.07-0.31c0.31-0.090.57-0.130.81-0.13 1.65 0 3 1.35 3 3s-1.35 3-3 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiCloudStorageOutline;
