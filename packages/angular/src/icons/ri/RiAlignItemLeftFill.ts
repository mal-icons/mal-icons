import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-align-item-left-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAlignItemLeftFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 21V3H5V21H3ZM7 14C7 13.45 7.45 13 8 13H16C16.55 13 17 13.45 17 14V19C17 19.55 16.55 20 16 20H8C7.45 20 7 19.55 7 19V14ZM8 4C7.45 4 7 4.45 7 5V10C7 10.55 7.45 11 8 11H20C20.55 11 21 10.55 21 10V5C21 4.45 20.55 4 20 4H8Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAlignItemLeftFill;
