import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-sparkasse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiSparkasse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.06 12.31v1.85h14.18v6.78c0.03 1.66-1.41 3.11-3.07 3.07H5.84c-1.660.03-3.1-1.41-3.07-3.07v-1.23H16.91v-1.85H2.76v-6.78c-0.03-1.66 1.41-3.1 3.07-3.07h12.33c1.66-0.04 3.1 1.41 3.07 3.07v1.23H7.06zm4.92-6.15c1.7 0 3.08-1.38 3.08-3.08S13.68 0 11.98 0 8.91 1.38 8.91 3.08s1.38 3.08 3.08 3.08z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiSparkasse;
