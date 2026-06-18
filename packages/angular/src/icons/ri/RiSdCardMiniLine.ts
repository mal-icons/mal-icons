import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sd-card-mini-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSdCardMiniLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 4V9.79C8 10.46 7.74 11.09 7.27 11.56L6 12.83V20H18V4H8ZM7 2H19C19.55 2 20 2.45 20 3V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V12.42C4 12.15 4.1 11.9 4.29 11.71L5.85 10.15C5.95 10.05 6 9.93 6 9.79V3C6 2.45 6.45 2 7 2ZM15 5H17V9H15V5ZM12 5H14V9H12V5ZM9 5H11V9H9V5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSdCardMiniLine;
