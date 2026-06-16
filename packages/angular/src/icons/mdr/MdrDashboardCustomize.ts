import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-dashboard-customize",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrDashboardCustomize {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 3h6c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1H4c-0.55 0-1-0.45-1-1V4c0-0.550.45-1 1-1zm10 0h6c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1h-6c-0.55 0-1-0.45-1-1V4c0-0.550.45-1 1-1zM4 13h6c0.55 0 1 0.45 1 1v6c0 0.55-0.45 1-1 1H4c-0.55 0-1-0.45-1-1v-6c0-0.550.45-1 1-1zm13 0c-0.55 0-1 0.45-1 1v2h-2c-0.55 0-1 0.45-1 1s0.45 1 1 1h2v2c0 0.550.45 1 1 1s1-0.45 1-1v-2h2c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2v-2c0-0.55-0.45-1-1-1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrDashboardCustomize;
