import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-mark-chat-unread",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssMarkChatUnread {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-80v-800h497q-4 14-6 29.5t-1 30.5H140v520h680v-349q16.79-5 31.4-13.5Q866-671 880-682v442H240L80-80Zm60-740v520-520Zm619.88 101Q714-719 682-751.12q-32-32.12-32-78Q650-875 682.12-907q32.12-32 78-32Q806-939 838-906.88q32 32.12 32 78Q870-783 837.88-751q-32.12 32-78 32Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssMarkChatUnread;
