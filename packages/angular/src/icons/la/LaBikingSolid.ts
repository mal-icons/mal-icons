import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-biking-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBikingSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 19.5 5 C 17.58 5 16 6.58 16 8.5 C 16 10.42 17.58 12 19.5 12 C 21.42 12 23 10.42 23 8.5 C 23 6.58 21.42 5 19.5 5 Z M 19.5 7 C 20.34 7 21 7.66 21 8.5 C 21 9.34 20.34 10 19.5 10 C 18.66 10 18 9.34 18 8.5 C 18 7.66 18.66 7 19.5 7 Z M 15.09 10.53 C 14.59 10.58 14.09 10.83 13.75 11.25 L 11.41 14.09 C 10.6 15.08 10.95 16.63 12.09 17.19 L 15.53 18.88 L 14.63 23.88 L 16.59 24.22 L 17.66 18.47 L 17.78 17.72 L 17.09 17.38 L 12.94 15.38 L 15.31 12.5 L 19.38 15.78 L 19.66 16 L 25 16 L 25 14 L 20.34 14 L 16.56 10.97 C 16.14 10.63 15.6 10.48 15.09 10.53 Z M 8.5 18 C 6.03 18 4 20.03 4 22.5 C 4 24.97 6.03 27 8.5 27 C 10.97 27 13 24.97 13 22.5 C 13 20.03 10.97 18 8.5 18 Z M 23.5 18 C 21.03 18 19 20.03 19 22.5 C 19 24.97 21.03 27 23.5 27 C 25.97 27 28 24.97 28 22.5 C 28 20.03 25.97 18 23.5 18 Z M 8.5 20 C 9.88 20 11 21.12 11 22.5 C 11 23.88 9.88 25 8.5 25 C 7.12 25 6 23.88 6 22.5 C 6 21.12 7.12 20 8.5 20 Z M 23.5 20 C 24.88 20 26 21.12 26 22.5 C 26 23.88 24.88 25 23.5 25 C 22.12 25 21 23.88 21 22.5 C 21 21.12 22.12 20 23.5 20 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBikingSolid;
