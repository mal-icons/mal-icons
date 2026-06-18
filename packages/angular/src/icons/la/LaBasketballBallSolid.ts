import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-basketball-ball-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBasketballBallSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 Z M 14.88 5.06 C 14.92 5.06 14.96 5.07 15 5.06 L 15 15 L 11.94 15 C 11.72 12.19 10.63 9.62 8.91 7.59 C 10.55 6.2 12.61 5.29 14.88 5.06 Z M 17 5.06 C 19.32 5.27 21.42 6.18 23.09 7.59 C 21.37 9.62 20.28 12.19 20.06 15 L 17 15 Z M 7.5 9.03 C 8.87 10.69 9.73 12.74 9.94 15 L 5.06 15 C 5.27 12.74 6.14 10.69 7.5 9.03 Z M 24.5 9.03 C 25.86 10.69 26.73 12.74 26.94 15 L 22.06 15 C 22.27 12.74 23.13 10.69 24.5 9.03 Z M 5.06 17 L 9.94 17 C 9.73 19.26 8.87 21.31 7.5 22.97 C 6.14 21.31 5.27 19.26 5.06 17 Z M 11.94 17 L 15 17 L 15 26.94 C 12.68 26.73 10.58 25.82 8.91 24.41 C 10.63 22.38 11.72 19.81 11.94 17 Z M 17 17 L 20.06 17 C 20.28 19.81 21.37 22.38 23.09 24.41 C 21.42 25.82 19.32 26.73 17 26.94 Z M 22.06 17 L 26.94 17 C 26.73 19.26 25.86 21.31 24.5 22.97 C 23.13 21.31 22.27 19.26 22.06 17 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBasketballBallSolid;
