import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-mark-unread-chat-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrMarkUnreadChatAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"19","cy":"3","r":"3"}],["path",{"d":"M7 8c-0.55 0-1-0.45-1-1s0.45-1 1-1h8.03a4.91 4.91 0 0 1-0.92-4H4.01a2 2 0 0 0-2 2L2 19.58c0 0.89 1.08 1.34 1.710.71L6 18h14c1.1 0 2-0.9 2-2V6.97C21.16 7.61 20.13 8 19 8H7zm6 6H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h6c0.55 0 1 0.45 1 1s-0.45 1-1 1zm4-3H7c-0.55 0-1-0.45-1-1s0.45-1 1-1h10c0.55 0 1 0.45 1 1s-0.45 1-1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrMarkUnreadChatAlt;
