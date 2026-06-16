import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-video-chat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtVideoChat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 17.17 5.17 16H20V4H4v13.17zM7 7c0-0.550.45-1 1-1h6c0.55 0 1 0.45 1 1v1.99L17 7v6l-2-1.99V13c0 0.55-0.45 1-1 1H8c-0.55 0-1-0.45-1-1V7z","opacity":".3"}],["path",{"d":"M20 2H4c-1.1 0-1.990.9-1.99 2L2 22l4-4h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"}],["path",{"d":"M8 14h6c0.55 0 1-0.45 1-1v-1.99L17 13V7l-2 1.99V7c0-0.55-0.45-1-1-1H8c-0.55 0-1 0.45-1 1v6c0 0.550.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtVideoChat;
