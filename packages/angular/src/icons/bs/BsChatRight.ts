import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-chat-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsChatRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.59a2 2 0 0 1 1.410.59l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.79a0.50.5 0 0 1-0.850.35l-2.85-2.85a1 1 0 0 0-0.71-0.29H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsChatRight;
