import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-dog-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaDogSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 20.31 3 L 20.06 3.66 L 17.31 11 L 9.63 11 C 8.71 11 7.84 11.26 7.13 11.72 L 4.72 9.28 L 3.28 10.72 L 5.72 13.13 C 5.26 13.84 5 14.71 5 15.63 C 5 16.13 5.09 16.64 5.25 17.13 L 5.97 19.22 L 5.03 22.75 L 5 22.88 L 5 28 L 7 28 L 7 23.13 L 7.97 19.47 L 8.03 19.16 L 7.94 18.88 L 7.13 16.47 C 7.04 16.2 7 15.91 7 15.63 C 7 14.16 8.16 13 9.63 13 L 17.66 13 L 21 16.28 L 21 13.47 L 19.19 11.69 L 21.25 6.16 L 21.5 6.53 L 21.78 7 L 23.66 7 L 26.72 9.31 L 25.88 11 L 22 11 L 22 16.88 L 21.06 19.69 L 21 19.84 L 21 23.13 L 22 27.13 L 22 28 L 24 28 L 24 26.88 L 23 22.88 L 23 20.13 L 23.94 17.31 L 24 17.16 L 24 13 L 27.13 13 L 29.28 8.69 L 28.59 8.19 L 24.34 5 L 22.91 5 L 21.94 3.47 L 21.66 3 Z M 10.22 18 L 9 22.88 L 9 28 L 11 28 L 11 23.13 L 11.78 20 L 12.72 20 C 13.07 20.23 14.31 21 16 21 L 17 21 L 17 23.13 L 18 27.13 L 18 28 L 20 28 L 20 26.88 L 19 22.88 L 19 19 L 16 19 C 14.94 19 13.56 18.16 13.56 18.16 L 13.31 18 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaDogSolid;
