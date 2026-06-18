import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-dashboard-horizontal-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDashboardHorizontalFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3C12.55 3 13 3.45 13 4L13 10C13 10.55 12.55 11 12 11L4 11C3.45 11 3 10.55 3 10L3 4C3 3.45 3.45 3 4 3L12 3ZM20 3C20.55 3 21 3.45 21 4L21 10C21 10.55 20.55 11 20 11L16 11C15.45 11 15 10.55 15 10L15 4C15 3.45 15.45 3 16 3L20 3ZM20 13C20.55 13 21 13.45 21 14L21 20C21 20.55 20.55 21 20 21L12 21C11.45 21 11 20.55 11 20L11 14C11 13.45 11.45 13 12 13L20 13ZM3 14C3 13.45 3.45 13 4 13L8 13C8.55 13 9 13.45 9 14L9 20C9 20.55 8.55 21 8 21L4 21C3.45 21 3 20.55 3 20L3 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDashboardHorizontalFill;
