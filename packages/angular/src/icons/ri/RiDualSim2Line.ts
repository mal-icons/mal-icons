import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-dual-sim-2-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDualSim2Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 2L19.71 6.71C19.89 6.89 20 7.15 20 7.41V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V3C4 2.45 4.45 2 5 2H15ZM14.17 4H6V20H18V7.83L14.17 4ZM12 7.5C13.66 7.5 15 8.84 15 10.5C15 11.38 14.62 12.18 14.01 12.73L14 12.72L14.01 12.73L12.6 14H15V16H9L9 14.55L12.67 11.24C12.87 11.06 13 10.79 13 10.5C13 9.95 12.55 9.5 12 9.5C11.45 9.5 11 9.95 11 10.5H9C9 8.84 10.34 7.5 12 7.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDualSim2Line;
