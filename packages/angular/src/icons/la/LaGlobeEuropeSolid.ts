import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-globe-europe-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGlobeEuropeSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 18.1 5 20.06 5.6 21.74 6.63 L 21.5 7.2 L 22.68 8.38 L 21.57 9.47 L 20 8 L 18 8 L 16 10.5 L 17 12.7 L 18 12 L 18 11 L 19 11 L 20.1 11.9 L 19 13 L 15 15 L 14 15 L 14 17 L 15 17 L 17 16 L 18 17 L 20 17 L 20 16 L 20.8 14.8 L 23 14 L 23 16 L 21 16 L 21 17 L 23 17 L 25 20 L 26 19 L 26 18 L 25 18 L 25 17 L 26 17 L 26.96 16.79 C 26.81 18.83 26.11 20.72 25 22.3 L 25 22 L 23.9 22 L 21.5 18 L 19 19 L 16 18 L 13 19 L 12 22 L 13 24 L 15 24 L 16 23 L 17 24 L 17 26.95 C 16.67 26.98 16.34 27 16 27 C 9.94 27 5 22.07 5 16 C 5 15.07 5.13 14.18 5.35 13.32 L 5.9 13 L 7 13 L 7 9.7 C 7.17 9.46 7.34 9.22 7.52 9 L 8.42 9 L 8.86 7.65 C 9.49 7.11 10.17 6.64 10.91 6.26 L 10 9 L 12 9 L 14 7 L 14 6 L 13 6 L 12 7 L 12 5.76 C 13.24 5.28 14.59 5 16 5 z M 14 11 L 14 13 L 15 13 L 15 11 L 14 11 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGlobeEuropeSolid;
