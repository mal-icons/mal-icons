import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-balance-scale-right-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBalanceScaleRightSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 8.48 5.11 L 7.49 6.88 L 3 14.73 L 3 15 C 3 17.76 5.24 20 8 20 C 10.76 20 13 17.76 13 15 L 13 14.73 L 8.79 7.36 L 13.01 8.95 C 13.01 8.96 13 8.98 13 9 C 13 10.3 13.84 11.4 15 11.82 L 15 24 L 11 24 L 11 26 L 15 26 L 17 26 L 17 24 L 17 11.82 C 17.5 11.64 17.94 11.33 18.28 10.93 L 22.99 12.77 L 19 19.75 L 19 20.02 C 19 22.77 21.24 25 24 25 C 26.76 25 29 22.77 29 20.02 L 29 19.75 L 24 11 L 18.99 9.06 C 18.99 9.04 19 9.02 19 9 C 19 7.35 17.65 6 16 6 C 15.08 6 14.27 6.42 13.72 7.08 L 8.48 5.11 z M 16 8 C 16.55 8 17 8.45 17 9 C 17 9.55 16.55 10 16 10 C 15.45 10 15 9.55 15 9 C 15 8.45 15.45 8 16 8 z M 8 10.02 L 10.28 14 L 5.72 14 L 8 10.02 z M 24 15.03 L 26.27 19 L 21.73 19 L 24 15.03 z M 5.19 16 L 10.81 16 C 10.4 17.16 9.3 18 8 18 C 6.7 18 5.6 17.16 5.19 16 z M 21.18 21 L 26.82 21 C 26.41 22.17 25.31 23.02 24 23.02 C 22.69 23.02 21.59 22.17 21.18 21 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBalanceScaleRightSolid;
