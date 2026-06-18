import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-friendica-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFriendicaLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 4V9H10V11H16V17H10V20H18C19.1 20 20 19.1 20 18V6C20 4.9 19.1 4 18 4H16ZM14 4H6C4.9 4 4 4.9 4 6V18C4 19.1 4.9 20 6 20H8V15H14V13H8V7H14V4ZM2 6C2 3.79 3.79 2 6 2H18C20.21 2 22 3.79 22 6V18C22 20.21 20.21 22 18 22H6C3.79 22 2 20.21 2 18V6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFriendicaLine;
