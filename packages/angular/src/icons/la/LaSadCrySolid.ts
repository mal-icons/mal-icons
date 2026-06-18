import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-sad-cry-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaSadCrySolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 3 C 8.83 3 3 8.83 3 16 C 3 23.17 8.83 29 16 29 C 23.17 29 29 23.17 29 16 C 29 8.83 23.17 3 16 3 z M 16 5 C 22.07 5 27 9.94 27 16 C 27 19.41 25.44 22.46 23 24.48 L 23 16 C 23 15.45 22.55 15 22 15 C 21.45 15 21 15.45 21 16 L 21 25.79 C 19.5 26.56 17.8 27 16 27 C 14.2 27 12.5 26.56 11 25.79 L 11 16 C 11 15.45 10.55 15 10 15 C 9.45 15 9 15.45 9 16 L 9 24.48 C 6.56 22.46 5 19.41 5 16 C 5 9.94 9.94 5 16 5 z M 12 10 C 10.76 10 9.82 10.69 9.19 11.28 C 8.55 11.87 8.16 12.44 8.16 12.44 L 9.84 13.56 C 9.84 13.56 10.09 13.13 10.53 12.72 C 10.97 12.31 11.55 12 12 12 L 15 12 L 15 10 L 12 10 z M 17 10 L 17 12 L 20 12 C 20.45 12 21.03 12.31 21.47 12.72 C 21.91 13.13 22.16 13.56 22.16 13.56 L 23.84 12.44 C 23.84 12.44 23.45 11.87 22.81 11.28 C 22.18 10.69 21.24 10 20 10 L 17 10 z M 16 16 C 14.35 16 13 17.57 13 19.5 C 13 21.43 14.35 23 16 23 C 17.65 23 19 21.43 19 19.5 C 19 17.57 17.65 16 16 16 z M 16 18 C 16.53 18 17 18.7 17 19.5 C 17 20.3 16.53 21 16 21 C 15.47 21 15 20.3 15 19.5 C 15 18.7 15.47 18 16 18 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaSadCrySolid;
