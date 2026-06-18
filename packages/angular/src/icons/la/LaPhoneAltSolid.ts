import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-phone-alt-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaPhoneAltSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 22.63 3.03 C 22.3 3.06 21.98 3.15 21.66 3.28 L 21.66 3.25 C 21.64 3.25 21.61 3.28 21.59 3.28 C 19.16 4.14 14.5 6.28 10.28 10.5 C 6.03 14.75 3.98 19.5 3.06 21.84 L 3.06 21.88 C 2.66 23.09 2.95 24.41 3.75 25.34 L 3.78 25.38 L 3.78 25.41 L 6.78 28.38 L 6.91 28.5 C 7.73 29.33 9.17 29.33 10 28.5 L 14.09 24.41 C 14.92 23.58 14.92 22.11 14.09 21.28 L 12.13 19.31 C 12.47 18.6 13.36 16.84 14.94 15.19 C 16.5 13.55 18.3 12.71 19 12.41 L 21.06 14.47 L 21.16 14.53 C 21.63 14.84 22.16 15.02 22.72 15 C 23.24 14.98 23.79 14.72 24.19 14.28 L 24.22 14.31 L 24.28 14.22 L 28.31 10.22 C 29.14 9.39 29.14 7.92 28.31 7.09 L 25.22 4 C 24.78 3.56 24.19 3.23 23.56 3.09 C 23.26 3.03 22.95 3 22.63 3.03 Z M 22.78 5.03 C 23.16 5 23.54 5.16 23.78 5.41 L 26.91 8.5 C 27.08 8.67 27.08 8.61 26.91 8.78 L 22.72 12.97 C 22.72 12.96 22.72 13 22.63 13 C 22.55 13 22.43 12.94 22.31 12.88 L 22.25 12.88 L 19.91 10.5 L 19.44 10.03 L 18.84 10.25 C 18.84 10.25 15.77 11.4 13.47 13.81 C 11.21 16.18 9.97 19.09 9.97 19.09 L 9.72 19.72 L 10.19 20.22 L 12.69 22.72 C 12.86 22.89 12.86 22.83 12.69 23 L 8.59 27.09 C 8.42 27.27 8.48 27.27 8.31 27.09 L 5.25 24.06 C 5.24 24.05 5.26 24.04 5.25 24.03 L 5.22 24 C 4.87 23.57 4.77 23.11 4.94 22.56 C 4.94 22.55 4.93 22.54 4.94 22.53 C 5.82 20.27 7.78 15.85 11.72 11.91 C 15.68 7.95 20.16 5.91 22.34 5.16 L 22.38 5.13 L 22.41 5.13 C 22.53 5.07 22.66 5.04 22.78 5.03 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaPhoneAltSolid;
