import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-mitten-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMittenSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 19 3 C 14.61 3 11 6.61 11 11 L 11 13.63 C 9.28 12.62 7.04 12.96 5.81 14.59 C 4.49 16.35 4.84 18.87 6.59 20.19 L 6.59 20.22 L 6.63 20.22 L 12 24.16 L 12 29 L 26 29 L 26 23.72 C 26.02 23.68 26.04 23.64 26.06 23.59 C 26.18 23.37 26.3 23.05 26.44 22.63 C 26.72 21.79 27 20.57 27 19 L 27 11 C 27 6.61 23.39 3 19 3 Z M 19 5 C 22.3 5 25 7.7 25 11 L 25 19 C 25 20.34 24.78 21.34 24.56 22 C 24.45 22.33 24.32 22.57 24.25 22.72 C 24.21 22.79 24.21 22.84 24.19 22.88 C 24.18 22.89 24.16 22.9 24.16 22.91 L 24.31 23 L 13.84 23 L 13.59 22.81 L 7.81 18.59 C 6.92 17.93 6.74 16.7 7.41 15.81 C 8.08 14.92 9.3 14.74 10.19 15.41 L 10.22 15.41 L 11.44 16.25 L 13 17.34 L 13 11 C 13 7.7 15.7 5 19 5 Z M 14 25 L 24 25 L 24 27 L 14 27 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMittenSolid;
