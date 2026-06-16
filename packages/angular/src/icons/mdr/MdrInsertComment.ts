import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-insert-comment",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrInsertComment {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h14l4 4V4c0-1.1-0.9-2-2-2zm-3 12H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h10c0.55 0 1 0.45 1 1s-0.45 1-1 1zm0-3H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h10c0.55 0 1 0.45 1 1s-0.45 1-1 1zm0-3H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h10c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrInsertComment;
