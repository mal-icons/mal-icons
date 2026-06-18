import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-torah-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTorahSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 7 3 C 6.45 3 6 3.45 6 4 C 6 4.55 6.45 5 7 5 C 7.55 5 8 4.55 8 4 C 8 3.45 7.55 3 7 3 Z M 7 5 C 6.25 5 5.56 5.21 5 5.63 C 4.44 6.04 4 6.73 4 7.5 L 4 25.5 C 4 26.27 4.44 26.96 5 27.38 C 5.3 27.61 5.66 27.77 6.03 27.88 C 6.02 27.92 6 27.95 6 28 C 6 28.55 6.45 29 7 29 C 7.55 29 8 28.55 8 28 C 8 27.95 7.98 27.92 7.97 27.88 C 8.34 27.77 8.7 27.61 9 27.38 C 9.56 26.96 10 26.27 10 25.5 L 10 25 L 22 25 L 22 25.5 C 22 26.27 22.44 26.96 23 27.38 C 23.3 27.61 23.66 27.77 24.03 27.88 C 24.02 27.92 24 27.95 24 28 C 24 28.55 24.45 29 25 29 C 25.55 29 26 28.55 26 28 C 26 27.95 25.98 27.92 25.97 27.88 C 26.34 27.77 26.7 27.61 27 27.38 C 27.56 26.96 28 26.27 28 25.5 L 28 7.5 C 28 6.73 27.56 6.04 27 5.63 C 26.44 5.21 25.75 5 25 5 C 24.25 5 23.56 5.21 23 5.63 C 22.44 6.04 22 6.73 22 7.5 L 22 8 L 10 8 L 10 7.5 C 10 6.73 9.56 6.04 9 5.63 C 8.44 5.21 7.75 5 7 5 Z M 25 5 C 25.55 5 26 4.55 26 4 C 26 3.45 25.55 3 25 3 C 24.45 3 24 3.45 24 4 C 24 4.55 24.45 5 25 5 Z M 7 7 C 7.35 7 7.64 7.13 7.81 7.25 C 7.98 7.38 8 7.45 8 7.5 L 8 25.5 C 8 25.55 7.98 25.63 7.81 25.75 C 7.64 25.88 7.35 26 7 26 C 6.65 26 6.36 25.88 6.19 25.75 C 6.02 25.63 6 25.55 6 25.5 L 6 7.5 C 6 7.45 6.02 7.38 6.19 7.25 C 6.36 7.13 6.65 7 7 7 Z M 25 7 C 25.35 7 25.64 7.13 25.81 7.25 C 25.98 7.38 26 7.45 26 7.5 L 26 25.5 C 26 25.55 25.98 25.63 25.81 25.75 C 25.64 25.88 25.35 26 25 26 C 24.65 26 24.36 25.88 24.19 25.75 C 24.02 25.63 24 25.55 24 25.5 L 24 7.5 C 24 7.45 24.02 7.38 24.19 7.25 C 24.36 7.13 24.65 7 25 7 Z M 10 10 L 22 10 L 22 23 L 10 23 Z M 12 12 L 12 14 L 20 14 L 20 12 Z M 15 15 L 15 17 L 20 17 L 20 15 Z M 12 18 L 12 20 L 20 20 L 20 18 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTorahSolid;
