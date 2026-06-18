import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-palfed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaPalfed {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 14 4 C 13.45 4 13 4.45 13 5 L 13 6 C 8.58 6 5 7.79 5 10 L 4 10 C 2.9 10 2 10.9 2 12 C 2 13.1 2.9 14 4 14 L 5.38 14 L 6.78 25.25 C 6.91 26.25 7.76 27 8.77 27 L 23.23 27 C 24.24 27 25.09 26.25 25.22 25.25 L 26.63 14 L 28 14 C 29.1 14 30 13.1 30 12 C 30 10.9 29.1 10 28 10 L 27 10 C 27 7.79 23.42 6 19 6 L 19 5 C 19 4.45 18.55 4 18 4 L 14 4 z M 15.33 8.19 C 15.71 8.22 16.05 8.51 16.14 8.97 C 19.8 7.84 23 9.02 23 12.62 C 23 16.57 19.09 20.37 16 19.63 L 16 24.71 L 16 24.72 C 16.01 24.89 16.06 25.35 15.76 25.69 C 15.27 26.23 14.06 26.2 13.91 24.56 C 13.7 22.3 13.92 14.1 13.98 12.25 C 12.89 13.01 11.02 14.8 11.02 16.1 C 11.03 16.23 11.03 16.31 11.04 16.34 C 11.05 16.34 11.38 16.2 11.61 16.2 C 12.96 16.2 12.66 18.44 10.88 18.44 C 9.79 18.44 9 17.52 9 16.26 C 9 14.12 11.18 11.4 14.11 9.84 C 14.16 9.21 14.26 8.72 14.64 8.4 C 14.86 8.23 15.1 8.17 15.33 8.19 z M 18.54 10.68 C 17.76 10.69 16.9 10.89 16.15 11.16 C 16.09 13.16 16.02 15.26 16 17.24 C 16.04 17.38 16.13 17.55 16.75 17.55 C 18.59 17.55 20.92 15.38 20.91 12.67 C 20.91 11.17 19.84 10.67 18.54 10.68 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaPalfed;
