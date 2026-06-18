import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-hand-rock-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaHandRockSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 15 6 C 13.94 6 13 6.56 12.47 7.41 C 12.03 7.16 11.54 7 11 7 C 9.36 7 8 8.36 8 10 L 8 13.66 L 5.91 16.34 C 4.63 18 4.71 20.37 6.09 21.94 L 8.47 24.63 C 9.8 26.14 11.71 27 13.72 27 L 19 27 C 22.86 27 26 23.86 26 20 L 26 11 C 26 9.36 24.64 8 23 8 C 22.46 8 21.97 8.16 21.53 8.41 C 21 7.56 20.06 7 19 7 C 18.46 7 17.97 7.16 17.53 7.41 C 17 6.56 16.06 6 15 6 Z M 15 8 C 15.57 8 16 8.43 16 9 L 16 12 L 18 12 L 18 10 C 18 9.43 18.43 9 19 9 C 19.57 9 20 9.43 20 10 L 20 12 L 22 12 L 22 11 C 22 10.43 22.43 10 23 10 C 23.57 10 24 10.43 24 11 L 24 20 C 24 22.77 21.77 25 19 25 L 13.72 25 C 12.28 25 10.92 24.39 9.97 23.31 L 7.59 20.59 C 6.84 19.73 6.8 18.5 7.5 17.59 L 8 16.94 L 8 18 L 10 18 L 10 10 C 10 9.43 10.43 9 11 9 C 11.57 9 12 9.43 12 10 L 12 12 L 14 12 L 14 9 C 14 8.43 14.43 8 15 8 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaHandRockSolid;
