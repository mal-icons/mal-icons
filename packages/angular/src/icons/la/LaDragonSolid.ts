import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-dragon-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDragonSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 8 3 L 8 9 L 3 10.5 L 6.5 14 L 4 19 L 9 19 L 9 29 L 11 29 L 11 19.85 C 12.3 20.41 13.66 20.99 16 21.92 C 16 21.95 16 21.97 16 22 C 16 24.23 16.7 26.05 17.98 27.25 C 19.26 28.46 21.04 29 23 29 L 23 27 C 21.4 27 20.18 26.57 19.35 25.8 C 18.64 25.13 18.16 24.15 18.03 22.73 C 19.35 23.23 20.53 23.65 21.35 23.87 C 21.64 23.95 21.93 23.98 22.22 23.98 C 24.04 23.98 25.8 22.53 26.13 20.69 L 27 16 L 24 18 C 19.31 18 18.2 15 18.2 15 C 18.55 14.16 19.28 13.56 20.12 13.12 L 21 14 L 21 12.74 C 21.19 12.67 21.38 12.62 21.56 12.56 L 23 14 L 23 12.22 C 23.06 12.21 23.13 12.19 23.18 12.18 L 25 14 L 25 12 L 28 14 L 28 9.15 C 28 7.68 27 6.32 25.55 6.05 C 25.36 6.02 25.18 6 25 6 C 24.2 6 23.48 6.34 22.95 6.85 L 21.5 3 L 20 7 L 14 7 Z M 10 6.73 L 12.89 8.66 L 13.39 9 L 23.67 9 L 24.27 8.34 C 24.38 8.21 24.63 8 25 8 C 25.06 8 25.13 8 25.19 8.02 C 25.64 8.1 26 8.6 26 9.15 L 26 10 L 25.61 10 L 25.59 9.99 L 25 10 L 24.97 10 C 24.26 10.01 18.03 10.23 16.36 14.23 L 16.05 14.95 L 16.32 15.69 C 16.92 17.29 19.2 20 24 20 L 24.23 20 L 24.16 20.34 C 24.01 21.21 23.1 21.98 22.22 21.98 C 22.1 21.98 21.98 21.97 21.87 21.94 C 18.79 21.11 9.89 17.21 9.8 17.17 L 9.42 17 L 7.23 17 L 8.29 14.89 L 8.93 13.61 L 6.78 11.45 L 8.58 10.92 L 10 10.49 Z M 13 10 C 13 10 13.23 12 15 12 C 16.77 12 18 10 18 10 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDragonSolid;
