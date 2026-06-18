import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-sim-card-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSimCard2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6 4V20H18V7.83L14.17 4H6ZM5 2H15L19.71 6.71C19.89 6.89 20 7.15 20 7.41V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V3C4 2.45 4.45 2 5 2ZM13 10V18H11V12H8V10H13ZM8 13H10V15H8V13ZM14 13H16V15H14V13ZM14 10H16V12H14V10ZM8 16H10V18H8V16ZM14 16H16V18H14V16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSimCard2Line;
