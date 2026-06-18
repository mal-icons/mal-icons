import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-user-follow-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiUserFollowFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 14.06V22H4C4 17.58 7.58 14 12 14C12.34 14 12.67 14.02 13 14.06ZM12 13C8.69 13 6 10.32 6 7C6 3.69 8.69 1 12 1C15.32 1 18 3.69 18 7C18 10.32 15.32 13 12 13ZM17.79 19.91L21.33 16.38L22.74 17.79L17.79 22.74L14.26 19.21L15.67 17.79L17.79 19.91Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiUserFollowFill;
