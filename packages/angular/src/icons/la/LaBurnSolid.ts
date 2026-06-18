import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-burn-solid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaBurnSolid {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16.03 3.47 L 15.38 4.03 C 15.38 4.03 13.04 5.94 10.72 8.72 C 8.4 11.5 6 15.16 6 19 C 6 21.77 7.13 24.07 8.97 25.63 C 10.69 27.08 13 27.87 15.5 27.97 C 15.67 27.98 15.83 28 16 28 C 16.17 28 16.33 27.98 16.5 27.97 C 19 27.87 21.31 27.08 23.03 25.63 C 24.87 24.07 26 21.77 26 19 C 26 15.54 23.59 11.94 21.28 9.06 C 18.98 6.18 16.69 4.06 16.69 4.06 Z M 15.97 6.25 C 16.49 6.74 17.85 7.98 19.72 10.31 C 21.91 13.06 24 16.56 24 19 C 24 21.23 23.13 22.93 21.72 24.13 C 21.38 24.41 21 24.68 20.59 24.91 C 20.84 24.32 21 23.68 21 23 C 21 16.75 17.66 12.94 17.66 12.94 L 15.84 10.91 L 15.91 13.63 C 15.91 13.63 15.91 14.9 15.75 16.13 C 15.67 16.74 15.55 17.35 15.41 17.69 C 15.36 17.79 15.34 17.8 15.31 17.84 C 15.21 17.8 14.89 17.65 14.59 17.34 C 14.26 17 14.03 16.66 14.03 16.66 L 13.06 15.16 L 12.31 16.78 C 12.31 16.78 11 19.46 11 23 C 11 23.68 11.16 24.32 11.41 24.91 C 11 24.68 10.63 24.41 10.28 24.13 C 8.87 22.93 8 21.23 8 19 C 8 16.04 10.1 12.62 12.28 10 C 14.13 7.78 15.45 6.7 15.97 6.25 Z M 17.66 16.78 C 18.34 18.27 19 20.34 19 23 C 19 24.66 17.66 26 16 26 C 14.34 26 13 24.66 13 23 C 13 21.41 13.31 20.06 13.59 19.09 C 14.04 19.5 14.59 19.91 15.41 19.91 C 15.88 19.91 16.34 19.69 16.63 19.41 C 16.91 19.13 17.08 18.79 17.22 18.47 C 17.45 17.94 17.56 17.36 17.66 16.78 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaBurnSolid;
