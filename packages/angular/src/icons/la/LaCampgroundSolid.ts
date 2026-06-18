import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-campground-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCampgroundSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 10.53 4.88 L 10.16 5.47 C 10.16 5.47 8.89 7.41 7.28 9.63 C 5.67 11.84 3.63 14.35 2.44 15.19 L 1.94 15.53 L 2 16.13 L 3 25.13 L 3.09 26 L 4 26 C 5.48 26 7.21 26.08 8.94 26.19 L 10 26.25 L 10 18 L 12 18 L 12 26.41 L 12.91 26.5 C 15.73 26.75 17.88 27 17.88 27 L 18.03 27 L 28.97 24.81 L 29 24.03 C 29 24.03 29.09 22.36 29.25 20.41 C 29.41 18.45 29.67 16.15 29.94 15.31 L 30.16 14.63 L 29.63 14.22 C 26.18 11.55 22.88 5.53 22.88 5.53 L 22.56 4.91 L 21.84 5 C 21.84 5 15.42 5.89 11.19 5.03 Z M 21.47 7.06 C 21.88 7.82 23.9 11.44 26.81 14.31 L 19.28 15.5 C 16.82 13.13 14.3 9.39 12.94 7.22 C 16.81 7.62 20.63 7.18 21.47 7.06 Z M 10.94 7.88 C 12.25 9.99 15 14.14 17.91 16.91 C 17.25 19.58 17.05 23.15 17 24.91 C 16.33 24.84 15.53 24.74 14 24.59 L 14 16 L 8 16 L 8 24.16 C 6.93 24.1 5.9 24.05 4.91 24.03 L 4.06 16.34 C 5.68 15.03 7.4 12.88 8.91 10.81 C 9.88 9.47 10.49 8.55 10.94 7.88 Z M 27.78 16.22 C 27.55 17.41 27.37 18.82 27.25 20.22 C 27.12 21.8 27.09 22.67 27.06 23.19 L 19.03 24.81 C 19.08 23.05 19.27 19.72 19.78 17.47 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCampgroundSolid;
