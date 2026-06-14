import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-spanner-outline",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiSpannerOutline {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"8","cy":"16","r":"1"}],["path",{"d":"M20.73 4.66c-0.39-0.38-1.01-0.38-1.40.010.39-0.390.39-1.010.01-1.4-1.08-0.79-2.4-1.27-3.84-1.27-3.59 0-6.5 2.91-6.5 6.5l0.030.38c-0.340.24-2.89 2.15-4.26 3.3-1.130.99-1.77 2.38-1.77 3.82 0 2.76 2.24 5 5 5 1.47 0 2.85-0.65 3.81-1.78 1.17-1.37 3.08-3.92 3.32-4.23l0.370.01c3.59 0 6.5-2.91 6.5-6.5 0-1.44-0.47-2.77-1.27-3.84zm-12.73 14.34c-1.66 0-3-1.34-3-3 0-0.920.42-1.73 1.06-2.29 2.37-2 3.62-2.75 5.12-4.01-0.1-0.38-0.18-0.78-0.18-1.19 0-2.48 2.02-4.5 4.5-4.50.47 0 0.910.09 1.340.23l-2.84 2.770.5 2.5 2.50.5 2.81-2.74c0.120.40.20.810.2 1.24 0 2.49-2.01 4.5-4.5 4.5-0.42 0-0.81-0.07-1.19-0.18-1.27 1.5-2.01 2.75-4.02 5.11-0.550.65-1.36 1.08-2.28 1.08zm11.38-12.73l-2.7 2.65-1.33-0.27-0.26-1.31 2.73-2.66c0.650.39 1.190.94 1.57 1.6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiSpannerOutline;
