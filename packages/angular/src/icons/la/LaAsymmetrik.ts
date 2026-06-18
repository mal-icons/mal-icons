import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-asymmetrik",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaAsymmetrik {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 18.09 6.08 C 12.65 5.99 6.66 7.36 2 10 C 4.68 8.96 7.38 8.2 10.28 7.56 C 13.94 6.75 17.71 6.33 21.03 6.84 C 28.44 8 30.6 13.04 25.84 18.11 C 25.34 18.63 24.66 19.21 24.03 19.67 L 16.85 9.1 L 7.64 22.51 L 7.55 22.47 C 3.27 20.99 3.21 18.48 5.98 15.33 C 6.99 14.25 8.36 13.34 9.85 12.5 C 10.84 11.94 11.89 11.4 12.98 11.01 C 9.81 12 6.9 13.58 5.01 15.53 C 3.66 16.92 3.02 18.3 3 19.56 C 2.98 21.27 4.84 22.55 7.02 23.42 L 5.28 26 L 10.21 26 L 10.22 25.99 L 10.23 26 L 11.4 24.23 C 12.45 24.27 13.58 24.22 14.67 24.09 L 13.51 26 L 20.08 26 L 18.48 23.33 C 19.35 23.08 20.23 22.78 21.06 22.44 L 22.92 25.26 L 23.38 26 L 28.32 26 L 24.66 20.6 C 25.56 20.01 26.46 19.29 27.13 18.6 C 29.02 16.65 29.96 14.71 29.98 12.95 C 30.02 9.76 27.09 7.2 21.74 6.38 C 20.57 6.21 19.34 6.11 18.09 6.08 z M 16.81 16.02 L 17.51 17.04 L 20.52 21.62 C 19.72 21.96 18.87 22.26 18.01 22.51 L 16.8 20.54 L 15.26 23.13 C 14.17 23.29 13.07 23.31 12.02 23.28 L 16.81 16.02 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaAsymmetrik;
