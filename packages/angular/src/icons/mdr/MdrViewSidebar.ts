import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-sidebar",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewSidebar {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 20H3c-0.55 0-1-0.45-1-1V5c0-0.550.45-1 1-1h12c0.55 0 1 0.45 1 1v14c0 0.55-0.45 1-1 1zm4-12h2c0.55 0 1-0.45 1-1V5c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1zm0 12h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1zm0-6h2c0.55 0 1-0.45 1-1v-2c0-0.55-0.45-1-1-1h-2c-0.55 0-1 0.45-1 1v2c0 0.550.45 1 1 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewSidebar;
