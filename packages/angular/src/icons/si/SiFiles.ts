import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-files",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiFiles {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.37 2.45a0.820.82 0 0 0-0.580.24L0.24 14.21a0.820.82 0 0 0-0.240.58v0.07c0-0.320.21-0.610.52-0.71l7.28-2.32a2.44 2.44 0 0 0 1.58-1.59l2.32-7.27a0.760.76 0 0 1 0.72-0.52zM0 14.86v5.05c0 0.90.73 1.64 1.64 1.64h20.73c0.9 0 1.64-0.73 1.64-1.64V4.09c0-0.9-0.73-1.64-1.64-1.64h-9.95v0.5l0.09 9.86c0.01 1.18-0.96 2.14-2.14 2.14L0 14.86zM12 3.66l-2.15 6.74v0a2.94 2.94 0 0 1-1.91 1.92l-6.72 2.14h9.14c0.91 0 1.64-0.73 1.64-1.64zm-10.360.98c-0.9 0-1.640.73-1.64 1.64v7.47l9.14-9.11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiFiles;
