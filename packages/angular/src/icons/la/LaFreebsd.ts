import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-freebsd",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFreebsd {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 6 C 5 7.85 5.62 9.86 6.5 11.47 C 5.55 13.09 5 14.99 5 17 C 5 23.06 9.94 28 16 28 C 21.7 28 26.39 23.65 26.94 18.09 C 26.97 17.73 27 17.37 27 17 C 27 15.43 26.66 13.9 26.03 12.5 C 25.98 12.59 25.95 12.65 25.91 12.72 C 25.56 13.48 25.16 14.29 24.75 14.97 C 24.91 15.63 25 16.3 25 17 C 25 17.3 25 17.61 24.97 17.91 C 24.52 22.46 20.68 26 16 26 C 11.02 26 7 21.98 7 17 C 7 12.02 11.02 8 16 8 C 16.43 8 16.84 8.04 17.25 8.09 C 17.49 7.77 17.74 7.48 17.97 7.22 L 17.97 7.19 L 18.16 7 C 18.38 6.76 18.58 6.56 18.78 6.38 C 17.88 6.14 16.95 6 16 6 C 14.61 6 13.26 6.27 12.03 6.75 C 11.74 6.55 11.39 6.32 10.94 6.09 C 9.82 5.54 8.17 5 6 5 Z M 26 5 C 23.83 5 22.18 5.54 21.06 6.09 C 19.94 6.65 19.28 7.28 19.28 7.28 L 19 7.59 L 19 8.03 C 19 8.03 19.02 9.24 19.66 10.47 C 20.29 11.7 21.72 13 24 13 L 24.53 13 L 24.84 12.56 C 24.84 12.56 27 9.45 27 6 L 27 5 Z M 7.22 7.16 C 8.31 7.3 9.25 7.55 9.91 7.84 C 9.16 8.34 8.51 8.93 7.91 9.59 C 7.61 8.81 7.36 7.96 7.22 7.16 Z M 24.72 7.16 C 24.39 8.91 23.81 10.29 23.47 10.88 C 22.37 10.71 21.77 10.19 21.44 9.53 C 21.16 8.99 21.16 8.72 21.13 8.44 C 21.3 8.29 21.36 8.2 21.94 7.91 C 22.58 7.59 23.57 7.31 24.72 7.16 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFreebsd;
