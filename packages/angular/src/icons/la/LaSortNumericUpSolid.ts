import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sort-numeric-up-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSortNumericUpSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 8.59 5 L 8.44 5.78 C 8.44 5.78 8.27 6.36 7.88 6.94 C 7.48 7.52 6.98 8 6 8 L 6 10 C 7.38 10 8.32 9.32 9 8.59 L 9 15 L 11 15 L 11 5 L 8.59 5 z M 23 5.5 L 22.28 6.19 L 18 10.5 L 19.41 11.91 L 22 9.31 L 22 28 L 24 28 L 24 9.31 L 26.59 11.91 L 28 10.5 L 23.72 6.19 L 23 5.5 z M 8.5 17 C 6.58 17 5 18.58 5 20.5 L 5 21 L 7 21 L 7 20.5 C 7 19.62 7.62 19 8.5 19 L 9.5 19 C 10.38 19 11 19.62 11 20.5 C 11 20.96 10.65 21.48 10.06 21.84 C 8.83 22.6 7.75 23.09 6.84 23.59 C 6.39 23.85 5.98 24.09 5.62 24.47 C 5.27 24.85 5 25.42 5 26 L 5 27 L 13 27 L 13 25 L 8.44 25 C 9.17 24.62 10.02 24.24 11.12 23.56 C 12.14 22.93 13 21.84 13 20.5 C 13 18.58 11.42 17 9.5 17 L 8.5 17 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSortNumericUpSolid;
