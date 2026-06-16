import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-piano-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfPianoOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21.19 21.19 2.81 2.81 1.39 4.22 3 5.83V19c0 1.10.9 2 2 2h13.17l1.61 1.61 1.41-1.42zM8.25 19H5V7.83l2 2v3.67c0 0.550.45 1 1 1h0.25V19zm1.5 0v-4.5H10c0.46 0 0.82-0.310.94-0.73l3.31 3.31V19h-4.5zM11 8.17 5.83 3H19c1.1 0 2 0.9 2 2v13.17l-2-2V5h-2v8.5c0 0.19-0.070.36-0.160.51L13 10.17V5h-2v3.17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfPianoOff;
