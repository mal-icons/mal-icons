import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-chat-bubble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxChatBubble {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12.5 3L2.5 3C1.67 3 1 3.67 1 4.5V9.5C1 10.33 1.67 11 2.5 11H7.5C7.63 11 7.76 11.05 7.85 11.15L10 13.29V11.5C10 11.22 10.22 11 10.5 11H12.5C13.33 11 14 10.33 14 9.5V4.5C14 3.67 13.33 3 12.5 3ZM2.5 2L12.5 2C13.88 2 15 3.12 15 4.5V9.5C15 10.88 13.88 12 12.5 12H11V14.5C11 14.7 10.88 14.88 10.69 14.96C10.5 15.04 10.29 15 10.15 14.85L7.29 12H2.5C1.12 12 0 10.88 0 9.5V4.5C0 3.12 1.12 2 2.5 2Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxChatBubble;
