import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-first-order-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFirstOrderAlt {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.82 3 3 8.82 3 16 C 3 23.18 8.82 29 16 29 C 23.18 29 29 23.18 29 16 C 29 8.82 23.18 3 16 3 z M 16 4 C 22.63 4 28 9.37 28 16 C 28 22.63 22.63 28 16 28 C 9.37 28 4 22.63 4 16 C 4 9.37 9.37 4 16 4 z M 16 5 C 9.93 5 5 9.93 5 16 C 5 22.07 9.93 27 16 27 C 22.07 27 27 22.07 27 16 C 27 9.93 22.07 5 16 5 z M 16 6 C 21.52 6 26 10.48 26 16 C 26 21.52 21.52 26 16 26 C 10.48 26 6 21.52 6 16 C 6 10.48 10.48 6 16 6 z M 15.99 7 C 15.58 7 15.17 7.03 14.76 7.09 L 14.98 10.89 L 13.73 7.29 C 12.93 7.49 12.16 7.81 11.45 8.23 L 13.13 11.69 L 10.57 8.81 C 9.91 9.32 9.32 9.9 8.82 10.55 L 11.7 13.12 L 8.23 11.44 C 7.82 12.16 7.5 12.92 7.29 13.71 L 10.93 14.99 L 7.09 14.76 C 7.03 15.17 7 15.58 7 16 C 7 16.42 7.03 16.82 7.08 17.23 L 10.92 17 L 7.29 18.27 C 7.49 19.07 7.81 19.83 8.23 20.55 L 11.69 18.87 L 8.81 21.43 C 9.32 22.08 9.91 22.67 10.56 23.18 L 13.12 20.3 L 11.44 23.76 C 12.16 24.19 12.92 24.5 13.72 24.71 L 14.99 21.06 L 14.76 24.91 C 15.17 24.97 15.58 25 15.99 25 C 16.42 25 16.82 24.97 17.22 24.91 L 17 21.04 L 18.28 24.71 C 19.07 24.5 19.83 24.18 20.55 23.76 L 18.87 20.3 L 21.43 23.16 C 22.08 22.67 22.67 22.08 23.16 21.43 L 20.3 18.87 L 23.76 20.54 C 24.18 19.83 24.5 19.06 24.7 18.27 L 21.07 17 L 24.9 17.23 C 24.96 16.82 24.99 16.42 24.99 16 C 24.99 15.58 24.96 15.17 24.9 14.77 L 21.06 14.99 L 24.7 13.72 C 24.49 12.92 24.17 12.16 23.75 11.44 L 20.29 13.12 L 23.16 10.56 C 22.66 9.91 22.08 9.32 21.43 8.83 L 18.87 11.69 L 20.54 8.23 C 19.83 7.82 19.07 7.5 18.27 7.29 L 17 10.92 L 17.23 7.09 C 16.82 7.03 16.42 7 15.99 7 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFirstOrderAlt;
