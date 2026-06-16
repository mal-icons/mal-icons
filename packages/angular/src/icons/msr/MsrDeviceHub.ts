import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-device-hub",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDeviceHub {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M150-120q-13 0-21.5-8.5T120-150v-120q0-13 8.5-21.5T150-300h124l176-176v-149q-35-12-57.5-40.5T370-730q0-46 32.5-78t77.5-32q46 0 78 32t32 78q0 36-22.5 64.5T510-625v149l176 176h124q13 0 21.5 8.5T840-270v120q0 13-8.5 21.5T810-120H690q-13 0-21.5-8.5T660-150v-86L480-416 300-236v86q0 13-8.5 21.5T270-120H150Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDeviceHub;
