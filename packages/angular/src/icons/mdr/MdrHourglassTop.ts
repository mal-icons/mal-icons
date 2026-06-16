import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-hourglass-top",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrHourglassTop {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 2c-1.1 0-2 0.9-2 2l0.01 3.18c0 0.530.21 1.030.58 1.41L10 12l-3.41 3.43c-0.370.37-0.580.88-0.58 1.41L6 20c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2v-3.16c0-0.53-0.21-1.04-0.58-1.41L14 12l3.41-3.4c0.38-0.380.59-0.890.59-1.42V4c0-1.1-0.9-2-2-2H8zm8 14.91V19c0 0.55-0.45 1-1 1H9c-0.55 0-1-0.45-1-1v-2.09c0-0.270.11-0.520.29-0.71L12 12.5l3.71 3.71c0.180.180.290.440.290.7z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrHourglassTop;
