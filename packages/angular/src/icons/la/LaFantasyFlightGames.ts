import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-fantasy-flight-games",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaFantasyFlightGames {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 2 L 2 16 L 16 30 L 30 16 L 16 2 z M 16 4.01 L 28 16 L 16 28 L 4 16 L 16 4.01 z M 16 6 L 6 16 L 16 26 L 26 16 L 16 6 z M 16.31 10.01 C 16.99 10.06 17.63 10.31 18.2 10.74 C 19.31 11.57 21.01 13.4 21.01 13.4 C 21.04 13.44 21.06 13.53 21.04 13.56 C 20.53 14.1 20.01 14.63 19.53 15.13 C 17.98 13.67 17.69 13.39 17.32 13.14 C 16.52 12.57 15.45 12.68 14.75 13.37 C 14.65 13.47 14.67 13.53 14.75 13.61 C 14.88 13.75 16.02 14.89 16.34 15.23 C 15.8 15.76 15.27 16.27 14.73 16.8 C 14.18 16.23 13.62 15.65 13.07 15.07 C 12.1 16.03 11.19 16.94 10.28 17.84 C 9.65 17.23 9.03 16.6 8.41 15.99 C 8.5 15.9 8.95 15.44 12.78 11.58 C 13.95 10.4 15.18 9.93 16.31 10.01 z M 21.73 14.19 C 22.36 14.79 22.97 15.39 23.59 16 C 22.68 16.94 19.89 19.74 19.04 20.59 C 17.43 22.19 15.5 22.31 14.2 21.52 C 13.19 20.91 12.42 20.06 10.89 18.49 C 11.44 17.93 11.97 17.39 12.5 16.85 C 13.99 18.29 14.17 18.47 14.52 18.76 C 15.36 19.42 16.45 19.37 17.21 18.67 C 17.37 18.52 17.37 18.51 17.21 18.34 C 16.73 17.86 16.25 17.37 15.78 16.89 C 15.71 16.83 15.64 16.78 15.74 16.68 C 16.22 16.19 16.71 15.7 17.19 15.21 C 17.21 15.21 17.23 15.2 17.28 15.16 C 17.84 15.75 18.41 16.34 18.96 16.92 C 19.91 15.98 20.83 15.08 21.73 14.19 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaFantasyFlightGames;
