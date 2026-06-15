import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-comment-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfCommentAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.5 0h-14c-0.83 0-1.5 0.67-1.5 1.5v10c0 0.83 0.67 1.5 1.5 1.5h0.5v4.1l4.69-4.1h8.81c0.83 0 1.5-0.67 1.5-1.5v-10c0-0.83-0.67-1.5-1.5-1.5zM16 11.5c0 0.28-0.22 0.5-0.5 0.5h-9.19l-3.31 2.9v-2.9h-1.5c-0.28 0-0.5-0.22-0.5-0.5v-10c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.23 0.5 0.5v10zM3 3h11v1h-11v-1zM3 5h11v1h-11v-1zM3 7h6v1h-6v-1z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfCommentAlt;
