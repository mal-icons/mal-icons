import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-brightness-7",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBrightness7 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M481-29 346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614L481-29Zm0-191q107.92 0 183.46-76.12Q740-372.25 740-481q0-107.92-75.54-183.46Q588.92-740 481-740q-108.75 0-184.87 75.54Q220-588.92 220-481q0 108.75 76.13 184.88T481-220Zm-0.5-60q-83.5 0-142-58.5t-58.5-142q0-83.5 58.5-141.5t142-58q83.5 0 141.5 58t58 141.5q0 83.5-58 142T480.5-280Zm0.5 167 107.92-107H740v-151l109-109-109-109v-151H589L481-849 371-740H220v151L111-480l109 109v151h150l111 107Zm-1-368Zm1 121q-50.82 0-85.91-35.09Q360-430.18 360-481q0-49.98 35.09-84.49T481-600q49.98 0 84.49 34.51T600-481q0 50.82-34.51 85.91Q530.98-360 481-360Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBrightness7;
