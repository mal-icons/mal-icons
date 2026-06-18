import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-symfony",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSymfony {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 22.07 22.07 27 16 27 C 9.94 27 5 22.07 5 16 C 5 9.94 9.94 5 16 5 z M 20.27 10.08 C 20.2 10.08 17.76 9.94 16.33 14.14 C 15.94 13.82 14.1 11.63 12.07 13.15 C 11.34 13.69 10.85 14.99 11.95 16.22 C 12.6 16.92 12.98 17.19 12.81 17.75 C 12.46 18.9 10.67 18.37 10.84 17.8 C 10.9 17.63 10.98 17.63 11.09 17.3 C 11.38 16.32 10.04 15.85 9.75 16.78 C 9.59 17.32 9.84 18.3 11.23 18.73 C 12.85 19.23 14.23 18.34 14.42 17.19 C 14.55 16.47 14.22 15.93 13.62 15.24 L 13.14 14.7 C 12.84 14.4 12.74 13.9 13.04 13.52 C 13.3 13.19 13.67 13.05 14.27 13.21 C 15.15 13.45 15.54 14.06 16.19 14.55 C 16.14 14.71 15.8 15.8 15.49 17.71 C 15.02 20.16 14.67 21.5 13.74 22.27 C 13.55 22.4 13.29 22.6 12.89 22.62 C 12.81 22.62 12.34 22.51 12.81 22.13 C 13.4 21.81 13.08 20.8 12.23 20.82 C 11.85 20.84 11.28 21.19 11.3 21.85 C 11.32 22.52 11.95 23.03 12.9 23 C 13.41 22.98 14.54 22.78 15.66 21.45 C 17.19 19.65 17.49 17.51 17.9 15.22 C 19.89 15.45 20.88 14.53 20.89 13.84 C 20.91 12.91 19.81 12.94 19.66 13.64 C 19.58 13.98 20.17 14.28 19.71 14.58 C 19.39 14.8 18.8 14.95 17.97 14.82 C 18.37 12.63 18.71 10.49 20.24 10.44 C 20.35 10.43 20.73 10.44 20.74 10.7 C 20.74 10.9 20.48 11.07 20.49 11.42 C 20.5 11.82 20.81 12.09 21.25 12.07 C 21.84 12.05 22.01 11.48 22 11.18 C 21.97 10.48 21.24 10.05 20.27 10.08 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSymfony;
