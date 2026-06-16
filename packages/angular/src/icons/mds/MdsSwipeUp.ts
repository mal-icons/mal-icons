import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-swipe-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsSwipeUp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.06 5.56 1 4.5 4.5 1 8 4.5 6.94 5.56 5.32 3.94a10.46 10.46 0 0 0 1.88 8.99L6.13 14A11.97 11.97 0 0 1 3.5 6.5c0-0.920.1-1.820.3-2.68L2.06 5.56zm19.65 5.62 2.09 7.39-8.23 3.65-6.84-2.850.61-1.62 3.8-0.75-4.35-9.83c-0.34-0.76 0-1.640.76-1.980.76-0.34 1.64 0 1.980.76l2.43 5.49 1.26-0.56 6.490.3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsSwipeUp;
