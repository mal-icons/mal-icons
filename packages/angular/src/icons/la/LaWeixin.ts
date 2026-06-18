import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-weixin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaWeixin {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 14 5 C 8.58 5 4 8.71 4 13.5 C 4 15.12 4.59 16.6 5.5 17.88 L 5.13 20.78 L 4.91 22.53 L 6.5 21.84 L 9 20.81 C 10.25 21.43 11.66 21.82 13.16 21.94 C 13.89 24.89 16.98 27 20.5 27 C 21.95 27 23.28 26.59 24.44 25.97 L 25.63 26.66 L 27.34 27.59 L 27.09 25.66 L 26.88 23.84 C 27.54 22.89 28 21.8 28 20.59 C 28 18.04 26.29 15.89 23.88 14.84 C 23.96 14.41 24 13.97 24 13.5 C 24 8.71 19.42 5 14 5 Z M 14 7 C 18.52 7 22 10.01 22 13.5 C 22 13.77 21.98 14.03 21.94 14.28 C 21.46 14.2 21 14.16 20.5 14.16 C 16.7 14.16 13.41 16.62 13.03 19.94 C 11.71 19.8 10.5 19.43 9.47 18.84 L 9.03 18.63 L 8.59 18.81 L 7.31 19.34 L 7.53 17.81 L 7.56 17.38 L 7.31 17.06 C 6.47 16.02 6 14.8 6 13.5 C 6 10.01 9.48 7 14 7 Z M 10.56 9.16 C 9.79 9.16 9.16 9.79 9.16 10.56 C 9.16 11.34 9.79 12 10.56 12 C 11.34 12 11.97 11.34 11.97 10.56 C 11.97 9.79 11.34 9.16 10.56 9.16 Z M 17.25 9.16 C 16.47 9.16 15.81 9.79 15.81 10.56 C 15.81 11.34 16.47 12 17.25 12 C 18.03 12 18.66 11.34 18.66 10.56 C 18.66 9.79 18.03 9.16 17.25 9.16 Z M 20.5 16.16 C 23.64 16.16 26 18.25 26 20.59 C 26 21.48 25.68 22.29 25.09 23 L 24.81 23.34 L 24.88 23.75 L 24.91 23.94 L 24.44 23.69 L 23.94 24.03 C 23 24.64 21.81 25 20.5 25 C 17.36 25 15 22.94 15 20.59 C 15 18.25 17.36 16.16 20.5 16.16 Z M 18 17.44 C 17.41 17.44 16.91 17.91 16.91 18.5 C 16.91 19.09 17.41 19.56 18 19.56 C 18.59 19.56 19.06 19.09 19.06 18.5 C 19.06 17.91 18.59 17.44 18 17.44 Z M 23.03 17.44 C 22.45 17.44 21.97 17.91 21.97 18.5 C 21.97 19.09 22.44 19.56 23.03 19.56 C 23.62 19.56 24.09 19.09 24.09 18.5 C 24.09 17.91 23.62 17.44 23.03 17.44 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaWeixin;
