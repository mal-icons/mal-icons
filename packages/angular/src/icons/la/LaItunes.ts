import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-itunes",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaItunes {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 10.05 5 C 7.25 5 5 7.25 5 10.05 L 5 21.95 C 5 24.75 7.25 27 10.05 27 L 21.95 27 C 24.75 27 27 24.75 27 21.95 L 27 10.05 C 27 7.25 24.75 5 21.95 5 L 10.05 5 z M 15.98 7 C 20.95 7 24.98 11.03 24.98 16 C 24.98 20.97 20.95 25 15.98 25 C 11.01 25 6.98 20.97 6.98 16 C 6.98 11.03 11.01 7 15.98 7 z M 15.98 8.03 C 11.57 8.03 8 11.6 8 16.01 C 8 20.42 11.57 24 15.98 24 C 20.39 24 23.96 20.42 23.96 16.02 C 23.96 11.6 20.39 8.03 15.98 8.03 z M 19.32 11 C 19.58 10.98 19.73 11.14 19.73 11.4 C 19.73 19.24 19.75 18.52 19.68 18.81 C 19.54 19.43 19.06 19.78 18.43 19.9 C 17.87 20 17.41 20.03 16.96 19.67 C 16.42 19.21 16.41 18.46 16.9 17.98 C 17.29 17.61 17.83 17.54 18.65 17.39 C 18.78 17.37 18.9 17.34 19 17.22 C 19.15 17.06 19.1 17.42 19.1 13.8 C 19.1 13.55 18.98 13.48 18.71 13.52 C 18.53 13.55 14.49 14.31 14.49 14.31 C 14.26 14.36 14.19 14.43 14.19 14.69 C 14.19 20.02 14.21 19.49 14.13 19.84 C 14.03 20.25 13.78 20.56 13.45 20.74 C 13.07 20.95 12.37 21.04 12.01 20.98 C 11.02 20.79 10.68 19.66 11.34 19.01 C 11.73 18.64 12.28 18.57 13.09 18.42 C 13.23 18.4 13.35 18.36 13.44 18.25 C 13.67 17.99 13.48 12.71 13.56 12.4 C 13.58 12.28 13.63 12.18 13.72 12.11 C 13.82 12.03 13.99 11.98 14.03 11.98 C 18.67 11.11 19.23 11 19.32 11 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaItunes;
