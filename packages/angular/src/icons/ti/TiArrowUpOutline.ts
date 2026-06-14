import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-arrow-up-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiArrowUpOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 21c-1.65 0-3-1.35-3-3v-4.76c-1.14 1.02-3.020.98-4.12-0.11-1.17-1.17-1.17-3.07 0-4.24l7.12-7.12 7.12 7.12c1.17 1.17 1.17 3.07 0 4.24-1.09 1.1-2.98 1.14-4.120.12v4.76c0 1.65-1.35 3-3 3zm-1-12.59v9.59c0 0.550.45 1 1 1s1-0.45 1-1v-9.59l3.29 3.29c0.380.38 1.030.38 1.41 0 0.39-0.390.39-1.02 0-1.41l-5.71-5.71-5.71 5.71c-0.390.39-0.39 1.02 0 1.410.380.38 1.030.38 1.41 0l3.29-3.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiArrowUpOutline;
