import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-shirtsinbulk",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaShirtsinbulk {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 4 L 5 23.44 L 5.59 23.69 L 15.47 27.91 L 15.84 28.09 L 16.25 27.94 L 26.38 23.69 L 27 23.44 L 27 4 Z M 7 6 L 25 6 L 25 9 L 7 9 Z M 7 11 L 25 11 L 25 22.09 L 15.84 25.91 L 7 22.09 Z M 16 13 C 13.24 13 11 15.24 11 18 C 11 20.76 13.24 23 16 23 C 18.76 23 21 20.76 21 18 C 21 15.24 18.76 13 16 13 Z M 16.19 15.03 C 17.59 15.03 18.73 15.84 18.78 15.88 L 18.03 16.91 C 18.02 16.9 17.17 16.28 16.19 16.28 C 15.59 16.28 14.56 16.45 14.56 17.06 C 14.79 17.32 15.66 17.31 16.03 17.31 L 16.22 17.31 C 17.85 17.31 18.91 17.93 18.91 18.94 C 18.91 19.87 18.17 20.97 16.13 20.97 C 14.59 20.97 13.3 20.16 13.25 20.13 L 13.94 19.09 C 13.95 19.1 14.96 19.72 16.13 19.72 C 16.82 19.72 17.66 19.51 17.66 18.94 C 17.66 18.78 17.04 18.56 16.22 18.56 L 16.06 18.56 C 15.3 18.56 14.27 18.54 13.69 17.97 C 13.44 17.72 13.31 17.43 13.31 17.06 C 13.31 15.83 14.44 15.03 16.19 15.03 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaShirtsinbulk;
