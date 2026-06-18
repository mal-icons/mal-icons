import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-revision",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxRevision {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.89 10.11a8.7 8.7 0 0 0-0.79-1.46l-1.66 1.12a6.61 6.61 0 0 1 0.99 2.35 6.66 6.66 0 0 1 0 2.65 6.5 6.5 0 0 1-0.38 1.23 6.4 6.4 0 0 1-0.6 1.11 6.65 6.65 0 0 1-1.78 1.78 6.61 6.61 0 0 1-2.340.99 6.73 6.73 0 0 1-2.65 0 6.55 6.55 0 0 1-3.32-1.79 6.61 6.61 0 0 1-1.41-2.09 6.61 6.61 0 0 1-0.38-1.23 6.63 6.63 0 0 1 0.38-3.88A6.55 6.55 0 0 1 7.36 8.8 6.63 6.63 0 0 1 9.45 7.39c0.4-0.170.81-0.3 1.23-0.380.11-0.020.22-0.030.32-0.05V10l5-4-5-4v2.94a8.81 8.81 0 0 0-0.720.11 8.51 8.51 0 0 0-3.06 1.29A8.57 8.57 0 0 0 4.11 16.77a8.54 8.54 0 0 0 1.84 2.72 8.61 8.61 0 0 0 2.72 1.83 8.55 8.55 0 0 0 5.060.5 8.58 8.58 0 0 0 6.16-5.06c0.22-0.520.39-1.060.5-1.61a8.64 8.64 0 0 0 0-3.45 8.68 8.68 0 0 0-0.5-1.61z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxRevision;
