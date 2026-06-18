import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-osi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaOsi {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 9.38 4 4 9.38 4 16 C 4 21.13 7.21 25.5 11.75 27.22 L 12.69 27.59 L 13.06 26.66 L 15.53 20.09 L 15.88 19.16 L 14.94 18.81 C 13.8 18.38 13 17.29 13 16 C 13 14.33 14.33 13 16 13 C 17.67 13 19 14.33 19 16 C 19 17.29 18.2 18.38 17.06 18.81 L 16.13 19.16 L 16.47 20.09 L 18.94 26.66 L 19.31 27.59 L 20.25 27.22 C 24.79 25.5 28 21.13 28 16 C 28 9.38 22.62 4 16 4 Z M 16 6 C 21.54 6 26 10.46 26 16 C 26 19.92 23.68 23.2 20.41 24.84 L 18.59 20.06 C 19.98 19.17 21 17.76 21 16 C 21 13.25 18.75 11 16 11 C 13.25 11 11 13.25 11 16 C 11 17.76 12.02 19.17 13.41 20.06 L 11.59 24.84 C 8.32 23.2 6 19.92 6 16 C 6 10.46 10.46 6 16 6 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaOsi;
