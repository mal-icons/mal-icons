import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-skype",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSkype {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 11 4 C 7.14 4 4 7.14 4 11 C 4 12.03 4.32 12.99 4.72 13.88 C 4.59 14.57 4.5 15.27 4.5 16 C 4.5 22.34 9.66 27.5 16 27.5 C 16.73 27.5 17.43 27.41 18.13 27.28 C 19.01 27.68 19.97 28 21 28 C 24.86 28 28 24.86 28 21 C 28 19.97 27.68 19.01 27.28 18.13 C 27.41 17.43 27.5 16.73 27.5 16 C 27.5 9.66 22.34 4.5 16 4.5 C 15.27 4.5 14.57 4.59 13.88 4.72 C 12.99 4.32 12.03 4 11 4 Z M 11 6 C 11.86 6 12.67 6.21 13.38 6.59 C 13.59 6.71 13.83 6.74 14.06 6.69 C 14.69 6.56 15.33 6.5 16 6.5 C 21.26 6.5 25.5 10.74 25.5 16 C 25.5 16.67 25.44 17.31 25.31 17.94 C 25.26 18.17 25.29 18.41 25.41 18.63 C 25.79 19.33 26 20.14 26 21 C 26 23.77 23.77 26 21 26 C 20.14 26 19.33 25.79 18.63 25.41 C 18.41 25.29 18.17 25.26 17.94 25.31 C 17.31 25.44 16.67 25.5 16 25.5 C 10.74 25.5 6.5 21.26 6.5 16 C 6.5 15.33 6.56 14.69 6.69 14.06 C 6.74 13.83 6.71 13.59 6.59 13.38 C 6.21 12.67 6 11.86 6 11 C 6 8.23 8.23 6 11 6 Z M 15.84 9.16 C 13.37 9.16 10.72 10.2 10.72 13 C 10.72 14.35 11.2 15.77 13.84 16.44 L 17.16 17.25 C 18.15 17.5 18.41 18.06 18.41 18.56 C 18.41 19.4 17.57 20.22 16.06 20.22 C 13.11 20.22 13.49 17.97 11.91 17.97 C 11.2 17.97 10.69 18.46 10.69 19.16 C 10.69 20.52 12.36 22.31 16.06 22.31 C 19.58 22.31 21.31 20.61 21.31 18.34 C 21.31 16.88 20.64 15.34 17.97 14.75 L 15.53 14.19 C 14.61 13.98 13.53 13.71 13.53 12.84 C 13.53 11.97 14.27 11.34 15.63 11.34 C 18.35 11.34 18.12 13.22 19.47 13.22 C 20.18 13.22 20.78 12.81 20.78 12.09 C 20.78 10.41 18.12 9.16 15.84 9.16 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSkype;
