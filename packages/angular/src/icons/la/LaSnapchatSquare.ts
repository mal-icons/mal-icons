import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-snapchat-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSnapchatSquare {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 16.12 10 C 16.1 10 15.91 10 15.88 10 C 15.39 10 13.71 10.15 12.92 12.04 C 12.62 12.75 12.74 14.03 12.79 14.93 C 12.75 14.95 12.67 14.98 12.55 14.98 C 12.39 14.98 12.21 14.93 12 14.82 C 11.74 14.69 11.28 14.89 11.23 15.21 C 11.19 15.39 11.27 15.66 11.83 15.89 C 12.04 15.99 12.55 16.09 12.67 16.39 C 12.72 16.51 12.71 16.67 12.62 16.86 C 12.61 16.86 12.61 16.87 12.61 16.87 C 12.58 16.94 11.84 18.72 10.21 19.01 C 10.09 19.03 10 19.15 10.01 19.29 C 10.03 19.81 11.12 20.01 11.61 20.09 C 11.66 20.16 11.7 20.46 11.76 20.69 C 11.79 20.79 11.86 20.91 12.05 20.91 C 12.24 20.91 12.52 20.8 12.96 20.8 C 13.58 20.8 13.8 20.95 14.28 21.31 C 14.63 21.57 15.25 22.05 15.99 21.99 C 16.72 22.03 17.21 21.7 17.72 21.31 C 18.21 20.95 18.42 20.8 19.04 20.8 C 19.5 20.8 19.73 20.91 19.95 20.91 L 19.96 20.91 C 20.11 20.91 20.2 20.82 20.24 20.69 C 20.31 20.46 20.35 20.16 20.39 20.09 C 21.34 19.93 21.85 19.71 21.97 19.41 C 22.05 19.21 21.94 19.04 21.8 19 C 20.17 18.72 19.44 16.94 19.4 16.86 C 19.4 16.86 19.4 16.86 19.4 16.85 C 19.31 16.66 19.29 16.51 19.34 16.38 C 19.43 16.15 19.78 16.03 20.01 15.95 C 20.08 15.93 20.13 15.91 20.18 15.89 C 20.59 15.72 20.79 15.51 20.79 15.27 C 20.79 15.07 20.65 14.9 20.42 14.82 C 20.28 14.76 20.08 14.75 19.94 14.82 C 19.75 14.92 19.58 14.97 19.43 14.98 C 19.33 14.97 19.26 14.95 19.22 14.92 C 19.27 14.02 19.39 12.75 19.09 12.03 C 18.52 10.67 17.34 10 16.12 10 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSnapchatSquare;
