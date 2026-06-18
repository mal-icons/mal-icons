import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-hammer-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaHammerSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 7.06 2 L 9.56 3.81 C 14.28 7.21 15.71 10.54 16 11.28 L 15.09 12.19 L 15.09 12.22 L 14.41 12.91 L 2.69 25.06 L 2 25.78 L 6.25 30.03 L 6.97 29.28 L 19.38 16.44 L 19.69 16.06 L 19.78 16 L 20.75 15.66 L 20.94 15.84 L 20.56 16.75 L 20.28 17.38 L 23.59 20.69 L 29.97 14.31 L 27.13 11.47 L 26.66 11.03 L 26.06 11.25 L 25.16 11.59 L 24.94 11.38 L 25.25 10.38 L 25.38 9.97 L 25.19 9.59 C 25.19 9.59 24.13 7.64 21.75 5.75 C 19.37 3.86 15.59 2 10.16 2 Z M 13.09 4.25 C 16.46 4.75 18.89 6.02 20.53 7.31 C 22.3 8.71 23 9.84 23.22 10.22 L 22.84 11.38 L 22.69 11.94 L 23.09 12.38 L 24.69 13.97 L 25.31 13.72 L 26.19 13.38 L 27.13 14.31 L 23.59 17.84 L 22.66 16.91 L 23.03 16 L 23.31 15.38 L 22.81 14.91 L 21.69 13.78 L 21.25 13.31 L 20.63 13.53 L 18.84 14.25 L 18.66 14.31 L 17.94 13.63 L 17.22 12.91 L 18.38 11.75 L 18.16 11.16 C 18.16 11.16 16.81 7.76 13.09 4.25 Z M 15.81 14.31 L 17.25 15.75 L 6.22 27.16 L 4.81 25.75 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaHammerSolid;
