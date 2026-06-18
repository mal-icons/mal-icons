import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-money-euro-box-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiMoneyEuroBoxFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3H21C21.56 3 22 3.45 22 4V20C22 20.56 21.56 21 21 21H3C2.45 21 2 20.56 2 20V4C2 3.45 2.45 3 3 3ZM10.05 11C10.29 9.86 11.3 9 12.5 9C13.12 9 13.68 9.22 14.12 9.59L15.82 8.46C15 7.56 13.82 7 12.5 7C10.19 7 8.28 8.75 8.03 11H7V13H8.03C8.28 15.25 10.19 17 12.5 17C13.82 17 15 16.44 15.82 15.55L14.12 14.41C13.68 14.78 13.12 15 12.5 15C11.3 15 10.29 14.14 10.05 13H15V11H10.05Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiMoneyEuroBoxFill;
