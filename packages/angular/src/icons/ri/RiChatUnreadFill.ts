import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-chat-unread-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChatUnreadFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 7C22.66 7 24 5.66 24 4C24 2.34 22.66 1 21 1C19.34 1 18 2.34 18 4C18 5.66 19.34 7 21 7ZM21 9C21.34 9 21.68 8.97 22 8.9V18C22 18.55 21.55 19 21 19H6.45L2 22.5V4C2 3.45 2.45 3 3 3H16.1C16.03 3.32 16 3.66 16 4C16 6.76 18.24 9 21 9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChatUnreadFill;
