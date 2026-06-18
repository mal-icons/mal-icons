import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-avianex",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaAvianex {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 10.61 4 C 8.3 4 6.15 5.8 5.72 8.09 L 3.07 22.55 C 2.86 23.72 3.12 24.84 3.83 25.69 C 4.54 26.53 5.58 27 6.76 27 L 21.38 27 C 23.7 27 25.85 25.21 26.27 22.91 L 28.93 8.45 C 29.14 7.27 28.87 6.16 28.16 5.31 C 27.46 4.47 26.42 4 25.24 4 L 10.61 4 z M 10.61 6 L 25.24 6 C 25.81 6 26.31 6.21 26.63 6.59 C 26.95 6.98 27.07 7.51 26.96 8.09 L 24.31 22.55 C 24.06 23.88 22.72 25 21.38 25 L 6.76 25 C 6.18 25 5.69 24.79 5.37 24.41 C 5.05 24.02 4.93 23.49 5.04 22.91 L 7.69 8.45 C 7.94 7.12 9.27 6 10.61 6 z M 11.42 7.97 L 11 8.2 L 10.11 9.56 L 13.35 14.27 L 14.32 15.67 C 13.75 16.25 13.21 16.82 12.77 17.31 L 10.04 15.85 L 9.3 16.57 L 11.77 18.84 L 13.68 21.72 L 14.53 21.12 L 13.49 18.09 C 14.08 17.73 14.76 17.28 15.45 16.81 L 20.9 22 L 22.4 21.36 L 22.7 20.99 L 18.23 15.36 L 18.01 15.02 C 18.95 14.35 19.59 13.87 19.68 13.81 C 20.05 13.5 19.98 12.83 19.55 12.33 C 19.12 11.82 18.47 11.65 18.1 11.96 C 18.1 11.96 17.42 12.6 16.51 13.49 L 16.28 13.28 L 11.42 7.97 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaAvianex;
