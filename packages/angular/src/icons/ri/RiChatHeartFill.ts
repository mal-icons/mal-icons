import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-chat-heart-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChatHeartFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.45 19L2 22.5V4C2 3.45 2.45 3 3 3H21C21.55 3 22 3.45 22 4V18C22 18.55 21.55 19 21 19H6.45ZM12.02 14.7L15.38 11.34C16.26 10.46 16.26 9.04 15.38 8.16C14.5 7.28 13.07 7.28 12.19 8.16L12.02 8.34L11.84 8.16C10.96 7.28 9.54 7.28 8.66 8.16C7.78 9.04 7.78 10.46 8.66 11.34L12.02 14.7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChatHeartFill;
