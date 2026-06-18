import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-dgraph",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiDgraph {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18.22 4.32c0.23-0.410.35-0.890.35-1.4A2.92 2.92 0 15.65 0c-1.37 0-2.520.94-2.84 2.22-0.27-0.01-0.54-0.03-0.81-0.03-5.58 0-10.1 4.51-10.1 10.1 0 2.74 1.1 5.23 2.87 7.05a2.92 2.92 0 0-0.59 1.75A2.92 2.92 0 7.1 24c1.24 0 2.3-0.78 2.73-1.87a10.09 10.09 0 12.27-9.86 9.98 9.98 0 0-3.88-7.95zm-2.550.38c-0.16 0-0.3-0.01-0.45-0.06l-1.21 3.52 1.77-0.28-2.49 4.07 2.08-0.51-7 8.34c0.350.320.560.780.56 1.31a1.78 1.78 0 1-1.78 1.78c-0.99 0-1.78-0.79-1.78-1.78s0.8-1.78 1.79-1.78c0.23 0 0.450.050.650.13l1.98-4.33-1.930.52 3.14-4.5-1.930.47L14.52 4.3c-0.4-0.34-0.64-0.83-0.64-1.37 0-0.990.8-1.78 1.79-1.78s1.780.8 1.78 1.79c0.010.97-0.79 1.77-1.78 1.77z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiDgraph;
