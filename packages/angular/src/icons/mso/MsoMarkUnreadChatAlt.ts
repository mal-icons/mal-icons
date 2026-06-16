import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-mark-unread-chat-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMarkUnreadChatAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M240-399h313v-60H240v60Zm0-130h480v-60H240v60Zm0-130h435q-21-11-38.5-26T605-719H240v60ZM80-80v-740q0-24 18-42t42-18h437q-4 14-6 29.5t-1 30.5H140v600l74-80h606v-349q16.79-5 31.4-13.5Q866-671 880-682v382q0 24-18 42t-42 18H240L80-80Zm60-740v520-520Zm619.88 101Q714-719 682-751.12q-32-32.12-32-78Q650-875 682.12-907q32.12-32 78-32Q806-939 838-906.88q32 32.12 32 78Q870-783 837.88-751q-32.12 32-78 32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMarkUnreadChatAlt;
