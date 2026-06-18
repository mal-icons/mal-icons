import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-motorcycle-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaMotorcycleSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 22.5 6 C 21.84 6 21.3 6.41 21.09 7 L 17 7 L 17 9 L 21.25 9 L 21.56 10 L 18 10 C 15.39 10 14.08 11.41 13.59 12 L 10.22 12 C 9.83 11.77 8.45 11 6.5 11 C 4.34 11 2.56 11.84 2.56 11.84 L 3.44 13.66 C 3.44 13.66 4.87 13 6.5 13 C 7.31 13 8.07 13.25 8.63 13.47 L 7.75 15.28 C 7.2 15.11 6.61 15 6 15 C 2.69 15 0 17.69 0 21 C 0 24.31 2.69 27 6 27 C 8.97 27 11.43 24.84 11.91 22 L 15.38 22 C 16.13 22 16.85 21.56 17.19 20.88 L 17.16 20.88 L 18.25 18.66 C 19.91 17.89 21.27 16.56 22.22 15.31 C 22.48 14.97 22.7 14.65 22.91 14.34 L 25.03 21.28 L 26.97 20.72 L 25.84 17.03 C 25.9 17.03 25.95 17 26 17 C 28.21 17 30 18.79 30 21 C 30 23.21 28.21 25 26 25 C 23.79 25 22 23.21 22 21 C 22 19.93 22.41 18.97 23.09 18.25 L 22.47 16.16 C 20.98 17.25 20 19.02 20 21 C 20 24.31 22.69 27 26 27 C 29.31 27 32 24.31 32 21 C 32 17.69 29.31 15 26 15 C 25.73 15 25.48 15.03 25.22 15.06 L 23.38 9 L 25 9 L 25 6 Z M 18 12 L 22 12 C 21.85 12.27 21.41 13.07 20.63 14.09 C 19.7 15.31 18.4 16.61 17.16 17.06 L 16.75 17.19 L 16.59 17.56 L 15.38 20 L 6 20 L 6 22 L 9.84 22 C 9.4 23.72 7.86 25 6 25 C 3.79 25 2 23.21 2 21 C 2 18.79 3.79 17 6 17 C 7.47 17 8.74 17.81 9.44 19 L 11.66 19 C 11.25 17.85 10.5 16.86 9.53 16.16 L 10.63 14 L 14.53 14 L 14.84 13.56 C 14.84 13.56 15.81 12 18 12 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaMotorcycleSolid;
