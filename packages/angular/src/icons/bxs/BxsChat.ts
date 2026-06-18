import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-chat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsChat {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 18h2v4.08L11.1 18H16c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v8c0 1.10.9 2 2 2z"}],["path",{"d":"M20 2H8c-1.1 0-2 0.9-2 2h12c1.1 0 2 0.9 2 2v8c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsChat;
