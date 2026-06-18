import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxs-conversation",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxsConversation {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 14h3.5c0.83 0 1.5-0.67 1.5-1.5v-9c0-0.83-0.67-1.5-1.5-1.5h-13C2.67 2 2 2.67 2 3.5V18l5.33-4H13zm-9-0.10.15-0.02L4 14v-0.1z"}],["path",{"d":"M20.5 8H20v6c0 1.1-0.89 1.99-1.99 2H8v0.5c0 0.830.67 1.5 1.5 1.5h7.17L22 22V9.5c0-0.83-0.67-1.5-1.5-1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxsConversation;
