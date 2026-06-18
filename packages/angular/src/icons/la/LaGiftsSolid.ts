import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-gifts-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGiftsSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 9 4 L 9 7.23 L 5.52 5.14 L 4.48 6.86 L 6.39 8 L 3 8 L 3 27 L 9 27 L 9 25 L 5 25 L 5 10 L 13.03 10 C 13.86 9.38 14.88 9 16 9 C 16.35 9 16.68 9.04 17 9.1 L 17 8 L 13.61 8 L 15.52 6.86 L 14.48 5.14 L 11 7.23 L 11 4 L 9 4 z M 16 11 C 14.36 11 13 12.36 13 14 C 13 14.35 13.07 14.68 13.19 15 L 11 15 L 11 17 L 11 27 L 29 27 L 29 17 L 29 15 L 26.81 15 C 26.93 14.68 27 14.35 27 14 C 27 12.36 25.65 11 24 11 C 22.25 11 21.06 12.33 20.28 13.44 C 20.18 13.59 20.09 13.73 20 13.88 C 19.91 13.73 19.82 13.59 19.72 13.44 C 18.94 12.33 17.75 11 16 11 z M 16 13 C 16.63 13 17.44 13.67 18.06 14.56 C 18.21 14.78 18.19 14.79 18.31 15 L 16 15 C 15.43 15 15 14.57 15 14 C 15 13.44 15.43 13 16 13 z M 24 13 C 24.57 13 25 13.43 25 14 C 25 14.57 24.57 15 24 15 L 21.69 15 C 21.81 14.79 21.79 14.78 21.94 14.56 C 22.56 13.67 23.38 13 24 13 z M 13 17 L 19 17 L 19 25 L 13 25 L 13 17 z M 21 17 L 27 17 L 27 25 L 21 25 L 21 17 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGiftsSolid;
