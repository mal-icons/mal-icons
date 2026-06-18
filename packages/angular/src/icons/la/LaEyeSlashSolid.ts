import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-eye-slash-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaEyeSlashSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 3.72 2.28 L 2.28 3.72 L 8.47 9.88 L 21.44 22.84 L 28.28 29.72 L 29.72 28.28 L 23.38 21.94 C 27.47 19.85 30.53 16.91 30.72 16.72 L 31.38 16.06 L 30.75 15.34 C 30.49 15.04 24.39 8 16 8 C 14.01 8 12.15 8.42 10.47 9.03 Z M 16 10 C 18.16 10 20.16 10.55 21.94 11.34 C 22.61 12.45 23 13.7 23 15 C 23 16.82 22.3 18.47 21.16 19.72 L 18.31 16.88 C 18.73 16.36 19 15.71 19 15 C 19 13.35 17.65 12 16 12 C 15.29 12 14.64 12.27 14.13 12.69 L 12.06 10.63 C 13.3 10.25 14.61 10 16 10 Z M 6.63 10.88 C 3.39 12.86 1.39 15.17 1.25 15.34 L 0.63 16.06 L 1.28 16.72 C 1.57 17 8.1 23.38 15.06 23.94 L 15.13 23.94 C 15.41 23.96 15.71 24 16 24 C 16.29 24 16.59 23.96 16.88 23.94 L 16.94 23.94 C 17.73 23.88 18.54 23.73 19.31 23.53 L 17.59 21.81 C 17.34 21.87 17.07 21.91 16.81 21.94 L 16.69 21.97 C 16.22 22.01 15.78 22.01 15.31 21.97 L 15.22 21.94 C 11.68 21.54 9 18.57 9 15 C 9 14.46 9.07 13.95 9.19 13.44 Z M 7.28 12.84 C 7.11 13.55 7 14.26 7 15 C 7 16.61 7.44 18.12 8.19 19.44 C 6.07 18.18 4.32 16.75 3.41 15.94 C 4.15 15.2 5.51 13.99 7.28 12.84 Z M 24.72 12.84 C 26.49 13.99 27.82 15.23 28.56 15.97 C 27.65 16.78 25.93 18.18 23.81 19.44 C 24.56 18.12 25 16.61 25 15 C 25 14.27 24.89 13.55 24.72 12.84 Z M 16 14 C 16.55 14 17 14.45 17 15 C 17 15.16 16.95 15.3 16.88 15.44 L 15.56 14.13 C 15.7 14.05 15.84 14 16 14 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaEyeSlashSolid;
