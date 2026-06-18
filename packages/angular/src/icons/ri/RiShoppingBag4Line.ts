import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-shopping-bag-4-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiShoppingBag4Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 6H15C15 4.34 13.66 3 12 3C10.34 3 9 4.34 9 6ZM7 6C7 3.24 9.24 1 12 1C14.76 1 17 3.24 17 6H20C20.55 6 21 6.45 21 7V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V7C3 6.45 3.45 6 4 6H7ZM5 8V20H19V8H5ZM9 10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10H17C17 12.76 14.76 15 12 15C9.24 15 7 12.76 7 10H9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiShoppingBag4Line;
