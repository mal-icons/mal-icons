import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-shuttle-van-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaShuttleVanSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 C 3.36 5 2 6.36 2 8 L 2 25 L 5.16 25 C 5.6 26.72 7.15 28 9 28 C 10.85 28 12.4 26.72 12.84 25 L 20.16 25 C 20.6 26.72 22.15 28 24 28 C 25.85 28 27.4 26.72 27.84 25 L 31 25 L 31 14.56 C 31 14 30.83 13.45 30.53 12.97 L 26.44 6.41 C 25.89 5.53 24.94 5 23.91 5 Z M 5 7 L 10 7 L 10 13 L 4 13 L 4 8 C 4 7.44 4.44 7 5 7 Z M 12 7 L 18 7 L 18 13 L 12 13 Z M 20 7 L 23.91 7 C 24.25 7 24.57 7.18 24.75 7.47 L 28.19 13 L 20 13 Z M 4 15 L 29 15 L 29 17 L 26 17 L 26 19 L 29 19 L 29 23 L 27.84 23 C 27.4 21.28 25.85 20 24 20 C 22.15 20 20.6 21.28 20.16 23 L 12.84 23 C 12.4 21.28 10.85 20 9 20 C 7.15 20 5.6 21.28 5.16 23 L 4 23 Z M 9 22 C 10.12 22 11 22.88 11 24 C 11 25.12 10.12 26 9 26 C 7.88 26 7 25.12 7 24 C 7 22.88 7.88 22 9 22 Z M 24 22 C 25.12 22 26 22.88 26 24 C 26 25.12 25.12 26 24 26 C 22.88 26 22 25.12 22 24 C 22 22.88 22.88 22 24 22 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaShuttleVanSolid;
