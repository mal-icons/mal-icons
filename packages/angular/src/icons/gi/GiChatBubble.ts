import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-chat-bubble",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiChatBubble {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M229.7 22.66A155.2 235.6 80.24 0 0 23.81 215.6 155.2 235.6 80.24 0 0 236.7 333.4c23.8 55.6-17.1 109.3-83.6 161.1 86.2-28.3 176.2-94.4 179.7-178.7a155.2 235.6 80.24 0 0 155.4-180.1A155.2 235.6 80.24 0 0 229.7 22.66z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiChatBubble;
