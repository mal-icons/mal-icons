import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-chess-queen-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaChessQueenSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 14.91 3 14 3.91 14 5 C 14 5.73 14.4 6.37 15 6.72 L 15 8.25 C 15 8.68 14.68 9 14.25 9 L 11.91 9 C 11.59 9 11.32 8.85 11.16 8.63 C 11.67 8.26 12 7.67 12 7 C 12 5.91 11.09 5 10 5 C 8.91 5 8 5.91 8 7 C 8 7.73 8.4 8.37 9 8.72 L 9 10.41 L 9.28 10.72 L 11.63 13.06 C 11.17 13.23 10.9 13.71 11 14.19 C 11.09 14.67 11.51 15.01 12 15 L 12.66 15 L 11.09 20.56 L 11.03 20.72 L 10.38 22 L 9 22 C 8.97 22 8.94 22 8.91 22 C 8.36 22.03 7.93 22.5 7.95 23.05 C 7.98 23.6 8.45 24.03 9 24 L 7.19 26.41 L 7 26.66 L 7 29 L 25 29 L 25 26.66 L 24.81 26.41 L 23 24 C 23.36 24 23.7 23.82 23.88 23.5 C 24.06 23.19 24.06 22.81 23.88 22.5 C 23.7 22.18 23.36 22 23 22 L 21.63 22 L 20.97 20.72 L 20.94 20.66 L 20.91 20.56 L 19.34 15 L 20 15 C 20.49 15.01 20.92 14.67 21.01 14.19 C 21.1 13.71 20.83 13.23 20.38 13.06 L 22.72 10.72 L 23 10.41 L 23 8.72 C 23.6 8.37 24 7.73 24 7 C 24 5.91 23.09 5 22 5 C 20.91 5 20 5.91 20 7 C 20 7.67 20.33 8.26 20.84 8.63 C 20.68 8.85 20.41 9 20.09 9 L 17.75 9 C 17.32 9 17 8.68 17 8.25 L 17 6.72 C 17.6 6.37 18 5.73 18 5 C 18 3.91 17.09 3 16 3 Z M 16 10.34 C 16.48 10.75 17.08 11 17.75 11 L 19.56 11 L 17.56 13 L 14.44 13 L 12.44 11 L 14.25 11 C 14.92 11 15.52 10.75 16 10.34 Z M 14.75 15 L 17.25 15 L 19.03 21.28 L 19.06 21.38 L 19.38 22 L 12.63 22 L 12.94 21.38 L 12.97 21.28 Z M 11.5 24 L 20.5 24 L 22.75 27 L 9.25 27 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaChessQueenSolid;
