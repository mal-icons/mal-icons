import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-cloudversify",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaCloudversify {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 20.28 7 C 19.4 6.99 18.57 7.1 17.89 7.3 C 15.01 8.16 13.67 9.93 12.91 12.73 C 12.53 12.86 11.59 13.17 10.66 13.92 C 10.47 14.07 10.22 14.29 9.97 14.51 C 9.98 14.57 10 14.62 10 14.68 L 10 16.5 C 10 16.78 9.78 17 9.5 17 L 7.5 17 C 7.22 17 7 16.78 7 16.5 L 7 16 L 6.5 16 C 6.22 16 6 16.22 6 16.5 L 6 18.49 C 6 18.77 6.22 18.99 6.5 18.99 L 8.33 18.99 C 8.44 18.99 8.53 18.96 8.62 18.92 L 8.7 19.28 C 9.31 22.44 12.15 24.58 15.92 24.38 C 18.48 26.52 22.76 26.64 25.24 24.11 C 28.71 24.16 31.17 21.9 31.82 19.18 C 32.57 16.09 30.92 12.62 27.22 11.5 C 25.98 8.24 22.9 7.05 20.28 7 z M 9.5 8 C 9.23 8 9 8.23 9 8.5 L 9 9.5 C 9 9.78 9.23 10 9.5 10 L 10.5 10 C 10.78 10 11 9.78 11 9.5 L 11 8.5 C 11 8.23 10.78 8 10.5 8 L 9.5 8 z M 0.5 10 C 0.23 10 0 10.23 0 10.5 L 0 11.5 C 0 11.78 0.23 12 0.5 12 L 1.5 12 C 1.78 12 2 11.78 2 11.5 L 2 10.5 C 2 10.23 1.78 10 1.5 10 L 0.5 10 z M 4.5 10 C 4.22 10 4 10.22 4 10.5 L 4 13.49 C 4 13.76 4.22 13.99 4.5 13.99 L 7.5 13.99 C 7.78 13.99 8 13.76 8 13.49 L 8 10.5 C 8 10.22 7.78 10 7.5 10 L 4.5 10 z M 20.82 10 C 21.13 10 21.44 10.02 21.77 10.06 C 25.43 10.53 28.77 14.22 25.33 17.63 C 27.18 16.81 27.88 14.9 27.81 13.77 L 28.36 14.75 C 28.98 15.86 29.16 17.14 28.86 18.37 C 28.37 20.33 26.72 21.83 24.67 22.22 C 22.99 22.53 20.31 21.99 19.85 19.27 C 19.3 21.59 20.99 22.89 22.76 23.61 C 17.13 25.31 13.76 21.14 15.66 18.13 C 13.92 19.21 13.88 21.61 14.12 22.71 C 13.18 22.09 11.29 21.08 11.11 18.69 C 10.95 16.69 12.24 14.89 14.1 13.97 C 15.7 13.17 19.53 13.38 21.11 15.86 C 20.37 13.45 18.29 12.5 15.78 12.27 C 17.19 10.91 18.71 9.99 20.82 10 z M 1.5 15 C 1.23 15 1 15.23 1 15.5 L 1 16.5 C 1 16.78 1.22 17 1.5 17 L 2.5 17 C 2.78 17 3 16.78 3 16.5 L 3 15.5 C 3 15.22 2.78 15 2.5 15 L 1.5 15 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaCloudversify;
