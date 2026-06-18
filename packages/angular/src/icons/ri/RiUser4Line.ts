import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-user-4-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiUser4Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 20H19V22H5V20ZM12 18C7.58 18 4 14.42 4 10C4 5.58 7.58 2 12 2C16.42 2 20 5.58 20 10C20 14.42 16.42 18 12 18ZM12 16C15.31 16 18 13.31 18 10C18 6.69 15.31 4 12 4C8.69 4 6 6.69 6 10C6 13.31 8.69 16 12 16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiUser4Line;
