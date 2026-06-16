import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-swipe-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSwipeLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.98 16.82-0.63 4.46c-0.140.99-0.99 1.72-1.98 1.72h-6.16c-0.53 0-1.29-0.21-1.66-0.59L5 17.62l0.83-0.84c0.24-0.240.58-0.350.92-0.28l3.250.74V6.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5v6h0.91c0.31 0 0.620.070.890.21l4.09 2.04c0.770.39 1.21 1.22 1.09 2.07zM12 2.5c4.74 0 7.67 2.52 8.43 4.5H22c-0.73-2.88-4.51-6-10-6-3.22 0-6.18 1.13-8.5 3.02V2H2v5h5V5.5H4.09c2.12-1.86 4.88-3 7.91-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSwipeLeft;
