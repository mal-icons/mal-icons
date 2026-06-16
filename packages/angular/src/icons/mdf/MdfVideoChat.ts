import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-video-chat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfVideoChat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-1.990.9-1.99 2L2 22l4-4h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-3 11-2-1.99V13c0 0.55-0.45 1-1 1H8c-0.55 0-1-0.45-1-1V7c0-0.550.45-1 1-1h6c0.55 0 1 0.45 1 1v1.99L17 7v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfVideoChat;
