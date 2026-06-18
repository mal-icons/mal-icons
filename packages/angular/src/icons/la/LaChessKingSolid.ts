import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-chess-king-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaChessKingSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 14.91 3 14 3.91 14 5 C 14 5.36 14.11 5.71 14.28 6 L 8 6 L 8 8.38 L 8.22 8.63 L 11.88 13 C 11.32 13.04 10.9 13.51 10.94 14.06 C 10.97 14.61 11.45 15.04 12 15 L 12.66 15 L 11.09 20.56 L 11.03 20.72 L 10.38 22 L 9 22 C 8.97 22 8.94 22 8.91 22 C 8.36 22.03 7.93 22.5 7.95 23.05 C 7.98 23.6 8.45 24.03 9 24 L 7.19 26.41 L 7 26.66 L 7 29 L 25 29 L 25 26.66 L 24.81 26.41 L 23 24 C 23.36 24 23.7 23.82 23.88 23.5 C 24.06 23.19 24.06 22.81 23.88 22.5 C 23.7 22.18 23.36 22 23 22 L 21.63 22 L 20.97 20.72 L 20.94 20.66 L 20.91 20.56 L 19.34 15 L 20 15 C 20.55 15.04 21.04 14.63 21.08 14.08 C 21.12 13.53 20.71 13.04 20.16 13 L 23.78 8.63 L 24 8.38 L 24 6 L 17.72 6 C 17.89 5.71 18 5.36 18 5 C 18 3.91 17.09 3 16 3 Z M 10.31 8 L 21.69 8 L 17.53 13 L 14.47 13 Z M 14.75 15 L 17.25 15 L 19.03 21.28 L 19.06 21.38 L 19.38 22 L 12.63 22 L 12.94 21.38 L 12.97 21.28 Z M 11.5 24 L 20.5 24 L 22.75 27 L 9.25 27 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaChessKingSolid;
