import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-swipe-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSwipeLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20.18 15.4 19.1 23h-9L5 17.62l1.22-1.23 3.780.85V6.5c0-0.830.67-1.5 1.5-1.5s1.50.67 1.5 1.5v6h1.38l5.8 2.9zM12 2.5c4.74 0 7.67 2.52 8.43 4.5H22c-0.73-2.88-4.51-6-10-6-3.22 0-6.18 1.13-8.5 3.02V2H2v5h5V5.5H4.09c2.12-1.86 4.88-3 7.91-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSwipeLeft;
