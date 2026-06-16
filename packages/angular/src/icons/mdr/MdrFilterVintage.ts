import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-filter-vintage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrFilterVintage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.7 12.4a6.06 6.06 0 0 0-0.86-0.4c0.29-0.110.58-0.240.86-0.4a6.01 6.01 0 0 0 3-5.19 6.01 6.01 0 0 0-6 0c-0.280.16-0.540.35-0.780.540.05-0.310.08-0.630.08-0.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 0.320.030.640.080.95-0.24-0.2-0.5-0.39-0.78-0.55a6.01 6.01 0 0 0-6 0 5.97 5.97 0 0 0 3 5.19c0.280.160.570.290.860.4-0.290.11-0.580.24-0.860.4a6.01 6.01 0 0 0-3 5.19 6.01 6.01 0 0 0 6 0c0.28-0.160.54-0.350.78-0.54-0.050.32-0.080.64-0.080.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-0.32-0.03-0.64-0.08-0.950.240.20.50.380.780.54a6.01 6.01 0 0 0 6 0 6.01 6.01 0 0 0-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrFilterVintage;
