import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-mark-chat-read",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfMarkChatRead {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.34 20-3.54-3.54 1.41-1.41 2.12 2.12 4.24-4.24L23 14.34 17.34 20zM12 17a7 7 0 0 1 10-6.32V4c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v18l4-4h6c0-0.170.01-0.330.03-0.5A4.07 4.07 0 0 1 12 17z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfMarkChatRead;
