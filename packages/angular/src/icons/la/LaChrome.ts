import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-chrome",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaChrome {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16 4 C 9.39 4 4 9.39 4 16 C 4 22.61 9.39 28 16 28 C 22.61 28 28 22.61 28 16 C 28 9.39 22.61 4 16 4 z M 16 6 C 19.91 6 23.28 8.23 24.92 11.49 L 18.12 11.49 C 17.47 11.18 16.76 11 16 11 C 14.38 11 12.94 11.8 12.03 13.01 L 8.44 9.46 C 10.27 7.34 12.97 6 16 6 z M 7.63 10.52 L 11.02 16.39 C 11.21 18.76 13.05 20.67 15.39 20.96 L 14.11 25.82 C 9.49 24.94 6 20.89 6 16 C 6 13.97 6.6 12.1 7.63 10.52 z M 25.44 12.72 C 25.8 13.75 26 14.85 26 16 C 26 21.53 21.53 26 16 26 C 15.81 26 15.63 25.98 15.45 25.97 L 18.84 20.1 C 20.14 19.2 21 17.7 21 16 C 21 15.31 20.86 14.65 20.6 14.05 L 25.44 12.72 z M 16 13 C 17.67 13 19 14.33 19 16 C 19 17.67 17.67 19 16 19 C 14.33 19 13 17.67 13 16 C 13 14.33 14.33 13 16 13 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaChrome;
