import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-align-item-left-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAlignItemLeftLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 21V3H5V21H3ZM9 15H15V18H9V15ZM8 13C7.45 13 7 13.45 7 14V19C7 19.55 7.45 20 8 20H16C16.55 20 17 19.55 17 19V14C17 13.45 16.55 13 16 13H8ZM9 9H19V6H9V9ZM7 5C7 4.45 7.45 4 8 4H20C20.55 4 21 4.45 21 5V10C21 10.55 20.55 11 20 11H8C7.45 11 7 10.55 7 10V5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAlignItemLeftLine;
