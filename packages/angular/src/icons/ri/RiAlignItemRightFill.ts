import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-align-item-right-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiAlignItemRightFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19 21V3H21V21H19ZM7 14C7 13.45 7.45 13 8 13H16C16.55 13 17 13.45 17 14V19C17 19.55 16.55 20 16 20H8C7.45 20 7 19.55 7 19V14ZM4 4C3.45 4 3 4.45 3 5V10C3 10.55 3.45 11 4 11H16C16.55 11 17 10.55 17 10V5C17 4.45 16.55 4 16 4H4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiAlignItemRightFill;
