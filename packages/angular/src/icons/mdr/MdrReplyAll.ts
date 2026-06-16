import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-reply-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrReplyAll {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 7.56c0-0.94-1.14-1.42-1.81-0.75L0.71 11.29a11 0 0 0 0 1.41l4.48 4.48c0.670.68 1.810.2 1.81-0.74 0-0.28-0.11-0.55-0.31-0.75L3 12l3.69-3.69c0.2-0.20.31-0.470.31-0.75zM13 9V7.41c0-0.89-1.08-1.34-1.71-0.71L6.7 11.29a11 0 0 0 0 1.41l4.59 4.59c0.630.63 1.710.18 1.71-0.71V14.9c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrReplyAll;
