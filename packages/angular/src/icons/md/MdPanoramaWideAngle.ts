import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-panorama-wide-angle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdPanoramaWideAngle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 6c2.45 0 4.710.2 7.290.640.47 1.780.71 3.580.71 5.36s-0.24 3.58-0.71 5.36c-2.580.44-4.840.64-7.290.64s-4.71-0.2-7.29-0.64C4.24 15.58 4 13.78 4 12s0.24-3.580.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.220.24-7.950.72l-0.930.16-0.250.9C2.29 7.85 2 9.93 2 12s0.29 4.150.87 6.22l0.250.890.930.16c2.730.49 5.220.73 7.950.73s5.22-0.24 7.95-0.72l0.93-0.160.25-0.89c0.58-2.080.87-4.160.87-6.23s-0.29-4.15-0.87-6.22l-0.25-0.89-0.93-0.16C17.22 4.24 14.73 4 12 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdPanoramaWideAngle;
