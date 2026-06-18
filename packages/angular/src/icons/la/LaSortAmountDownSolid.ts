import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sort-amount-down-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSortAmountDownSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 5 L 4 7 L 16 7 L 16 5 Z M 21 5 L 21 23.69 L 18.41 21.09 L 17 22.5 L 21.28 26.81 L 22 27.5 L 22.72 26.81 L 27 22.5 L 25.59 21.09 L 23 23.69 L 23 5 Z M 4 9 L 4 11 L 14 11 L 14 9 Z M 4 13 L 4 15 L 12 15 L 12 13 Z M 4 17 L 4 19 L 10 19 L 10 17 Z M 4 21 L 4 23 L 8 23 L 8 21 Z M 4 25 L 4 27 L 6 27 L 6 25 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSortAmountDownSolid;
