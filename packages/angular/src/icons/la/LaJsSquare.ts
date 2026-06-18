import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-js-square",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaJsSquare {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5 5 L 5 27 L 27 27 L 27 5 L 5 5 z M 7 7 L 25 7 L 25 25 L 7 25 L 7 7 z M 20.24 15 C 18.82 15 17.9 15.91 17.9 17.12 C 17.9 18.43 18.67 19.06 19.83 19.55 L 20.23 19.72 C 20.96 20.05 21.39 20.23 21.39 20.79 C 21.39 21.25 20.97 21.58 20.3 21.58 C 19.51 21.58 19.07 21.17 18.72 20.61 L 17.41 21.36 C 17.88 22.29 18.85 23 20.34 23 C 21.86 23 23 22.21 23 20.77 C 23 19.42 22.23 18.82 20.86 18.24 L 20.46 18.07 C 19.77 17.76 19.47 17.56 19.47 17.09 C 19.47 16.7 19.77 16.4 20.24 16.4 C 20.71 16.4 21 16.6 21.28 17.09 L 22.54 16.28 C 22 15.35 21.27 15 20.24 15 z M 14.39 15.1 L 14.39 20.56 C 14.39 21.36 14.05 21.56 13.53 21.56 C 12.98 21.56 12.74 21.19 12.49 20.74 L 11.18 21.53 C 11.56 22.34 12.31 23 13.6 23 C 15.02 23 16 22.24 16 20.58 L 16 15.1 L 14.39 15.1 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaJsSquare;
