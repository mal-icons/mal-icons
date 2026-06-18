import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-bug-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxBugAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 9h6v2H9zm0 4h6v2H9z"}],["path",{"d":"m18 5.41 1.71-1.71-1.41-1.41-1.56 1.56C15.48 2.71 13.82 2 12 2s-3.480.71-4.73 1.86L5.71 2.29 4.29 3.71 6 5.41A6.94 6.94 0 0 0 5 9H3v2h2v2H3v2h2c0 3.86 3.14 7 7 7s7-3.14 7-7h2v-2h-2v-2h2V9h-2a6.94 6.94 0 0 0-1-3.59zM17 13v2c0 2.76-2.24 5-5 5s-5-2.24-5-5V9c0-2.76 2.24-5 5-5s5 2.24 5 5v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxBugAlt;
