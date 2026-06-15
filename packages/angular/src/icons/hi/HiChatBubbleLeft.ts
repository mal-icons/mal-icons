import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-hi-chat-bubble-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class HiChatBubbleLeft {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M2.25 12.76c0 1.6 1.12 2.99 2.71 3.23 1.090.16 2.190.28 3.290.37V21l4.08-4.08a1.53 1.53 0 0 1 1.04-0.44 48.28 48.28 0 0 0 5.68-0.49c1.58-0.23 2.71-1.63 2.71-3.23V6.74c0-1.6-1.12-2.99-2.71-3.23A48.39 48.39 0 0 0 12 3c-2.39 0-4.740.18-7.040.51C3.37 3.75 2.25 5.14 2.25 6.74v6.02Z"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":1.5};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default HiChatBubbleLeft;
