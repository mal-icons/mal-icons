import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-sync-problem",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdSyncProblem {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12c0 2.210.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24A6 6 0 0 1 5 12a5.99 5.99 0 0 1 4-5.65V4.26C5.55 5.15 3 8.27 3 12zm8 5h2v-2h-2v2zM21 4h-6v6l2.24-2.24A6 6 0 0 1 19 12a5.99 5.99 0 0 1-4 5.65v2.09c3.45-0.89 6-4.01 6-7.74 0-2.21-0.91-4.2-2.36-5.64L21 4zm-10 9h2V7h-2v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdSyncProblem;
