import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-xing-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaXingSquare {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 19.64 9 C 19.42 9 19.24 9.13 19.09 9.38 C 16.18 14.52 14.67 17.17 14.57 17.35 L 17.46 22.62 C 17.6 22.87 17.78 23 18.02 23 L 20.06 23 C 20.33 23 20.45 22.78 20.32 22.56 L 17.46 17.35 L 17.46 17.34 L 21.96 9.44 C 22.08 9.21 21.94 9 21.7 9 L 19.64 9 z M 11.07 12 C 10.83 12 10.69 12.2 10.82 12.44 L 12.19 14.79 L 10.04 18.55 C 9.92 18.77 10.06 19 10.3 19 L 12.32 19 C 12.53 19 12.72 18.87 12.87 18.6 C 14.27 16.15 14.99 14.87 15.05 14.78 L 13.66 12.38 C 13.51 12.13 13.33 12 13.1 12 L 11.07 12 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaXingSquare;
