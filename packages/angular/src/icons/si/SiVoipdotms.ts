import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-voipdotms",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiVoipdotms {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17.51 2.37c-0.95 0-1.880.24-2.710.7a5.72 5.72 0 0 0-2.06 1.92l-5.18 8.05c-0.93 1.45-3.08 1.66-3.920.94l4.05 6.34c0.260.40.610.73 1.030.96a2.81 2.81 0 0 0 2.71 0 2.85 2.85 0 0 0 1.02-0.96L24 2.37ZM0 8.31l2.23 3.52s0.89 1.3 2.4 1.3c1.51 0 2.38-1.3 2.38-1.3l2.23-3.52Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiVoipdotms;
