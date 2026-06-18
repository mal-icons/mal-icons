import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-align-item-right-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAlignItemRightLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 21V3H21V21H19ZM9 15H15V18H9V15ZM8 13C7.45 13 7 13.45 7 14V19C7 19.55 7.45 20 8 20H16C16.55 20 17 19.55 17 19V14C17 13.45 16.55 13 16 13H8ZM5 9H15V6H5V9ZM3 5C3 4.45 3.45 4 4 4H16C16.55 4 17 4.45 17 5V10C17 10.55 16.55 11 16 11H4C3.45 11 3 10.55 3 10V5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAlignItemRightLine;
