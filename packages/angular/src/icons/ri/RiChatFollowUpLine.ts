import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-chat-follow-up-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChatFollowUpLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 3C21.55 3 22 3.45 22 4V18C22 18.55 21.55 19 21 19H6.46L2 22.5V4C2 3.45 2.45 3 3 3H21ZM20 5H4V18.39L5.76 17H20V5ZM17 7V15H15V7H17ZM11 8V10L13 10V12L11 12V14H9V12L7 12V10L9 10V8H11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChatFollowUpLine;
