import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-money-euro-box-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMoneyEuroBoxLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3H21C21.56 3 22 3.45 22 4V20C22 20.56 21.56 21 21 21H3C2.45 21 2 20.56 2 20V4C2 3.45 2.45 3 3 3ZM4 5V19H20V5H4ZM10.05 11H15V13H10.05C10.29 14.14 11.3 15 12.5 15C13.12 15 13.68 14.78 14.12 14.41L15.82 15.55C15 16.44 13.82 17 12.5 17C10.19 17 8.28 15.25 8.03 13H7V11H8.03C8.28 8.75 10.19 7 12.5 7C13.82 7 15 7.56 15.82 8.46L14.12 9.59C13.68 9.22 13.12 9 12.5 9C11.3 9 10.29 9.86 10.05 11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMoneyEuroBoxLine;
