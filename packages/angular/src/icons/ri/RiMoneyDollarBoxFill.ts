import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-money-dollar-box-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMoneyDollarBoxFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3H21C21.56 3 22 3.45 22 4V20C22 20.56 21.56 21 21 21H3C2.45 21 2 20.56 2 20V4C2 3.45 2.45 3 3 3ZM8.5 14V16H11V18H13V16H14C15.39 16 16.5 14.88 16.5 13.5C16.5 12.12 15.39 11 14 11H10C9.73 11 9.5 10.78 9.5 10.5C9.5 10.23 9.73 10 10 10H15.5V8H13V6H11V8H10C8.62 8 7.5 9.12 7.5 10.5C7.5 11.88 8.62 13 10 13H14C14.28 13 14.5 13.23 14.5 13.5C14.5 13.78 14.28 14 14 14H8.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMoneyDollarBoxFill;
