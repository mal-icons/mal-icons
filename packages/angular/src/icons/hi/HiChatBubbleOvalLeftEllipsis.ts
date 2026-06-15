import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-chat-bubble-oval-left-ellipsis",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiChatBubbleOvalLeftEllipsis {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M8.63 12a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0H8.25m4.13 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0H12m4.13 0a0.380.38 0 1 1-0.75 0 0.380.38 0 0 1 0.75 0Zm0 0h-0.37M21 12c0 4.56-4.03 8.25-9 8.25a9.76 9.76 0 0 1-2.56-0.34A5.97 5.97 0 0 1 5.41 20.97a5.97 5.97 0 0 1-0.47-0.06 4.48 4.48 0 0 0 0.98-2.02c0.09-0.46-0.13-0.9-0.47-1.23C3.93 16.18 3 14.19 3 12c0-4.56 4.03-8.25 9-8.25s9 3.69 9 8.25Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiChatBubbleOvalLeftEllipsis;
