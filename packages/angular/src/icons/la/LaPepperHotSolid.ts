import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-pepper-hot-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaPepperHotSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 28 5 L 28 3 C 26.01 3 24.46 3.55 23.39 4.64 C 22.78 5.27 22.45 5.97 22.25 6.57 C 21.75 6.22 21.16 6 20.5 6 C 17.98 6 17.02 8.01 17 9.38 C 17 9.59 16.99 9.82 16.98 10.06 C 16.3 12.05 15 10.73 15 8 C 11.78 11.42 15.25 12.68 13.27 14.66 C 12.85 15.09 11.84 15.25 11.21 14.48 C 10.38 13.49 12.07 11.86 10.47 10.65 C 10.76 12.48 9.35 12.1 8.88 11.71 C 8.25 11.2 7.13 10.08 9 7 C 7.08 7.88 5.93 9.65 6 11 C 6.2 14.54 11.66 17.61 9.46 19.67 C 8.34 20.71 6.16 19.3 7 17 C 5.95 17.54 4.71 18.81 5.11 20.79 C 5.38 22.16 7.38 25.25 4 27 C 4 27 4.02 27 4.04 27.01 L 3.96 29 C 4.02 29 4.29 29.01 4.73 29.01 C 7.54 29.01 17.27 28.58 23.27 22.84 C 26.41 19.83 28 15.85 28 11 C 28 9.62 27.37 7 25 7 C 24.71 7 24.43 7.04 24.18 7.1 C 24.29 6.77 24.48 6.38 24.82 6.04 C 25.5 5.35 26.57 5 28 5 Z M 25 9 C 25.95 9 26 10.98 26 11 C 26 15.28 24.61 18.77 21.89 21.39 C 17.46 25.63 10.49 26.68 6.7 26.93 C 7.63 26.72 8.73 26.29 9.95 25.47 C 15.8 22.27 18.88 14.7 18.99 9.67 L 19 9.67 L 19 9.39 C 19 9.16 19.1 8 20.5 8 C 21.36 8 22 9.21 22 10 L 24 10 C 24 9.57 24.11 9 25 9 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaPepperHotSolid;
