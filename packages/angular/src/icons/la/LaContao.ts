import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-contao",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaContao {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 5.66 5.47 C 4.75 5.47 4 6.19 4 7.09 L 4 24.91 C 4 25.81 4.75 26.53 5.66 26.53 L 9.38 26.53 C 7.78 24.79 7.05 22.25 7 22.03 C 6.76 21.08 5.83 16.93 5.5 14.97 C 5.37 14.18 5.28 13.31 5.28 12.19 C 5.28 8.61 7.14 6.47 8.34 5.47 Z M 22.16 5.47 C 23.77 6.92 24.66 9.41 24.66 9.41 L 18.25 10.75 C 18.25 10.75 17.3 8.63 15.13 8.63 C 13.94 8.63 11.78 9.46 11.78 11.59 C 11.78 12.98 12.27 15.87 12.91 18.63 C 13.68 21.96 14.53 23.72 16.69 23.72 C 20.24 23.72 20.22 20.19 20.22 20.19 L 26.66 18.75 C 26.66 18.75 26.66 19.39 26.66 20.31 C 26.66 23.42 24.63 25.85 24 26.53 L 26.34 26.53 C 27.25 26.53 28 25.81 28 24.91 L 28 7.09 C 28 6.19 27.25 5.47 26.34 5.47 Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaContao;
