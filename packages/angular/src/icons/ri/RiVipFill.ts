import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-vip-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiVipFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3H21C21.56 3 22 3.45 22 4V20C22 20.55 21.56 21 21 21H3C2.45 21 2 20.55 2 20V4C2 3.45 2.45 3 3 3ZM11 8.5V15.5H13V8.5H11ZM10.72 8.5H8.61L7.11 12.61L5.61 8.5H3.5L6.11 15.46H8.11L10.72 8.5ZM16 13.5H17.5C18.89 13.5 20 12.38 20 11C20 9.62 18.89 8.5 17.5 8.5H14V15.5H16V13.5ZM16 11.5V10.5H17.5C17.78 10.5 18 10.72 18 11C18 11.28 17.78 11.5 17.5 11.5H16Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiVipFill;
