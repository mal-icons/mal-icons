import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sort-amount-up-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSortAmountUpSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 4 5 L 4 7 L 16 7 L 16 5 L 4 5 z M 22 5.5 L 21.28 6.19 L 17 10.5 L 18.41 11.91 L 21 9.31 L 21 28 L 23 28 L 23 9.31 L 25.59 11.91 L 27 10.5 L 22.72 6.19 L 22 5.5 z M 4 9 L 4 11 L 14 11 L 14 9 L 4 9 z M 4 13 L 4 15 L 12 15 L 12 13 L 4 13 z M 4 17 L 4 19 L 10 19 L 10 17 L 4 17 z M 4 21 L 4 23 L 8 23 L 8 21 L 4 21 z M 4 25 L 4 27 L 6 27 L 6 25 L 4 25 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSortAmountUpSolid;
