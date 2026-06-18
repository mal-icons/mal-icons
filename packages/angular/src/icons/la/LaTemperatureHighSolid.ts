import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-temperature-high-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaTemperatureHighSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9 4 L 9 15.47 C 7.25 16.74 6 18.68 6 21 C 6 24.86 9.15 28 13 28 C 16.86 28 20 24.86 20 21 C 20 18.68 18.75 16.74 17 15.47 L 17 14 L 19 14 L 19 12 L 17 12 L 17 10 L 19 10 L 19 8 L 17 8 L 17 6 L 19 6 L 19 4 L 9 4 z M 24.5 4 C 22.57 4 21 5.57 21 7.5 C 21 9.43 22.57 11 24.5 11 C 26.43 11 28 9.43 28 7.5 C 28 5.57 26.43 4 24.5 4 z M 11 6 L 15 6 L 15 16.41 L 15.5 16.69 C 17 17.56 18 19.15 18 21 C 18 23.77 15.77 26 13 26 C 10.23 26 8 23.77 8 21 C 8 19.15 9 17.56 10.5 16.69 L 11 16.41 L 11 6 z M 24.5 6 C 25.33 6 26 6.67 26 7.5 C 26 8.33 25.33 9 24.5 9 C 23.67 9 23 8.33 23 7.5 C 23 6.67 23.67 6 24.5 6 z M 12 8 L 12 18.19 C 10.84 18.6 10 19.7 10 21 C 10 22.66 11.34 24 13 24 C 14.66 24 16 22.66 16 21 C 16 19.7 15.16 18.6 14 18.19 L 14 8 L 12 8 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaTemperatureHighSolid;
