import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-hand-middle-finger-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaHandMiddleFingerSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 2 C 14.36 2 13 3.36 13 5 L 13 10.19 C 12.68 10.07 12.35 10 12 10 C 10.36 10 9 11.36 9 13 L 9 16.66 L 6.91 19.34 C 5.63 21 5.71 23.37 7.09 24.94 L 9.47 27.63 C 10.8 29.14 12.71 30 14.72 30 L 20 30 C 23.86 30 27 26.86 27 23 L 27 14 C 27 12.36 25.64 11 24 11 C 23.46 11 22.97 11.16 22.53 11.41 C 22 10.56 21.06 10 20 10 C 19.65 10 19.32 10.07 19 10.19 L 19 5 C 19 3.36 17.64 2 16 2 Z M 16 4 C 16.57 4 17 4.43 17 5 L 17 15 L 19 15 L 19 13 C 19 12.43 19.43 12 20 12 C 20.57 12 21 12.43 21 13 L 21 15 L 23 15 L 23 14 C 23 13.43 23.43 13 24 13 C 24.57 13 25 13.43 25 14 L 25 23 C 25 25.77 22.77 28 20 28 L 14.72 28 C 13.28 28 11.92 27.39 10.97 26.31 L 8.59 23.59 C 7.84 22.73 7.8 21.5 8.5 20.59 L 9 19.94 L 9 21 L 11 21 L 11 13 C 11 12.43 11.43 12 12 12 C 12.57 12 13 12.43 13 13 L 13 15 L 15 15 L 15 5 C 15 4.43 15.43 4 16 4 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaHandMiddleFingerSolid;
