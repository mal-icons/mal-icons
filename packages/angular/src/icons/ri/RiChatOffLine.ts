import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-chat-off-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiChatOffLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.81 1.39L22.61 21.19L21.19 22.61L17.58 19L6.46 19L2 22.5V4C2 3.83 2.04 3.67 2.12 3.53L1.39 2.81L2.81 1.39ZM4 5.41L4 18.39L5.76 17L15.58 17L4 5.41ZM21 3C21.55 3 22 3.45 22 4V17.79L20 15.79V5L9.21 5L7.21 3H21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiChatOffLine;
