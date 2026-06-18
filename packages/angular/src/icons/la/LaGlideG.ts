import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-la-glide-g",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class LaGlideG {
  readonly viewBox = "0 0 32 32";
  readonly nodes: NodeTuple[] = [["path",{"d":"M 16.04 3 C 10.19 3 7 8.77 7 13.07 C 7 17.54 9.84 20.01 14.27 20.01 C 14.88 20.01 14.83 19.96 14.83 20.21 C 13.97 26.75 10.22 26.96 10.22 25.01 C 10.22 23.02 12.97 22.52 12.99 22.4 C 12.98 21.78 10.6 21 10 21 C 8.28 21.01 7 23.11 7 24.54 C 7 27.17 8.54 29 11.22 29 C 15.15 29 18.02 25.05 18.9 21.62 C 19.67 18.54 19.47 18.4 19.9 18.18 C 21.54 17.36 22.82 17.57 24.67 17.57 C 25.57 17.57 26.22 17.76 27.66 18 C 27.81 18 28 17.85 28 17.71 C 28 17.3 26.38 14.34 26 14.19 C 25.82 14.12 25.41 14 25.22 14 C 23.33 14 21.98 14.38 20.39 15.28 L 20.35 15.24 C 20.7 12.84 22 10.29 22 7.82 C 22 4.19 19.6 3 16.04 3 z M 16.29 5.83 C 17.23 5.83 17.77 6.22 17.77 7 C 17.76 7.73 17.63 8.45 17.48 9.15 C 17.01 11.42 16.08 13.99 15.61 16.26 C 15.49 16.78 14.93 16.65 14.49 16.65 C 12.55 16.65 12 14.53 12 12.94 C 12 10.56 12.92 7.39 15.14 6.17 C 15.5 5.96 15.89 5.83 16.29 5.83 z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default LaGlideG;
