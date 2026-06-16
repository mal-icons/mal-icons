import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-swipe-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSwipeRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19.98 16.82-0.63 4.46c-0.140.99-0.99 1.72-1.98 1.72h-6.16c-0.53 0-1.29-0.21-1.66-0.59L5 17.62l0.83-0.84c0.24-0.240.58-0.350.92-0.28l3.250.74V6.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5v6h0.91c0.31 0 0.620.070.890.21l4.09 2.04c0.770.39 1.21 1.22 1.09 2.07zM19.91 5.5H17V7h5V2h-1.5v2.02A13.41 13.41 0 0 0 12 1C6.51 1 2.73 4.12 2 7h1.57C4.33 5.02 7.26 2.5 12 2.5c3.03 0 5.79 1.14 7.91 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSwipeRight;
