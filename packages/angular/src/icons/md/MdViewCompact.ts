import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-view-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdViewCompact {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 4v16h20V4H2zm4.5 14H4v-2.5h2.5V18zm0-4.75H4v-2.5h2.5v2.5zm0-4.75H4V6h2.5v2.5zM11 18H8.5v-2.5H11V18zm0-4.75H8.5v-2.5H11v2.5zm0-4.75H8.5V6H11v2.5zm4.5 9.5H13v-2.5h2.5V18zm0-4.75H13v-2.5h2.5v2.5zm0-4.75H13V6h2.5v2.5zM20 18h-2.5v-2.5H20V18zm0-4.75h-2.5v-2.5H20v2.5zm0-4.75h-2.5V6H20v2.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdViewCompact;
