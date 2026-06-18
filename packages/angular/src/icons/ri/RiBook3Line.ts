import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-book-3-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiBook3Line {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 4H7C5.9 4 5 4.9 5 6C5 7.1 5.9 8 7 8H21V21C21 21.55 20.55 22 20 22H7C4.79 22 3 20.21 3 18V6C3 3.79 4.79 2 7 2H20C20.55 2 21 2.45 21 3V4ZM5 18C5 19.1 5.9 20 7 20H19V10H7C6.27 10 5.59 9.81 5 9.46V18ZM20 7H7C6.45 7 6 6.55 6 6C6 5.45 6.45 5 7 5H20V7Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiBook3Line;
