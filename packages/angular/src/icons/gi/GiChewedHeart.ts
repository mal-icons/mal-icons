import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-chewed-heart",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiChewedHeart {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M371.15 21.42c-47.940.47-94.52 30.35-106.6 84.86 23.31 25.97 35.25 59.46 30.36 94.45l-18.51-2.58c6.01-43.03-18.18-83.97-60.57-106.48-30.01-13.25-62.24-15.24-91.8-8.28l-6.82 1.15c0.040.210.060.390.090.6-0.280.08-0.550.15-0.830.230.30.040.590.090.890.14 3.05 18.48 3.43 30.23 1.01 38.14-2.46 8.04-7.6 13.9-19.86 21.88l-10.95 7.13 10.29 8.06c21.59 16.91 26.17 33.39 22.36 44.38-3.81 11-17.38 20.56-42.93 20.02l-11.91-0.25 2.59 11.63c3.9 17.52 2.97 29.85-0.3 37.89s-8.53 12.52-16.62 15.31l0.010.02-7.91 2.56C112.05 394.05 302.19 431.69 337.77 493.3c0-88.87 183.9-228.26 149.85-373.73-15.84-67.67-66.89-98.63-116.47-98.14zm-233.69 72.25c21.02 14.63 31.41 45.18 15.14 71.9 96.35-16.05 73.76 120.85 5.7 101.38-19.06 41.18-62.37 43.63-87.2 32.82 5.94-4.66 10.79-10.81 13.86-18.36 4.23-10.4 5.16-23.08 3.09-38 25.03-2.27 43.54-14.15 49.8-32.21 6.22-17.96-0.74-38.94-19.36-57.19 8.66-7.18 14.73-15.13 17.73-24.9 3.15-10.27 3.02-21.51 1.23-35.44z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiChewedHeart;
