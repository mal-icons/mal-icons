import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-sports-gymnastics",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrSportsGymnastics {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 6c0-1.10.9-2 2-2s2 0.9 2 2-0.9 2-2 2-2-0.9-2-2zm9 16c-0.56 0-1.02-0.44-1.05-1l-0.45-9L8 11H2c-0.55 0-1-0.45-1-1s0.45-1 1-1h5l6.26-4.47c0.42-0.3 1-0.23 1.340.160.380.450.3 1.12-0.18 1.46L11.14 8.5H14l7.09-4.09a0.980.98 0 0 1 1.1 1.62L14.5 12l-0.45 9c-0.030.56-0.49 1-1.05 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrSportsGymnastics;
