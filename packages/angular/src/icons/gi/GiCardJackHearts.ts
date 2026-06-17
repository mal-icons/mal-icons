import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-card-jack-hearts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCardJackHearts {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M119.44 36c-16.13 0-29.2 17.24-29.2 38.5v363c0 21.26 13.07 38.5 29.2 38.5h275.3c16.13 0 29.2-17.24 29.2-38.5v-363c0-21.26-13.07-38.5-29.2-38.5H119.44zm57.21 16.17h0c13.61-0.32 26.5 9.86 27.07 28.040.98 31.09-47.74 52.95-52.31 70.02-5-18.65-51.41-37.57-52.45-70.01-0.99-31.15 37.4-37.91 52.45-11.85 6.26-10.84 15.92-15.98 25.24-16.19zm51.67 116.52h77.74v8.91h-11.05c-4.36 0-7.490.79-9.39 2.38-1.82 1.59-2.73 3.88-2.73 6.9v114c0 8.8-2.14 16.76-6.42 23.89-4.28 7.05-10.54 12.68-18.78 16.88-8.24 4.12-17.55 6.18-27.93 6.18-14.11 0-25.64-4.12-34.59-12.36-8.95-8.32-13.43-18.46-13.43-30.43 0-8.88 2.26-15.97 6.78-21.28 4.52-5.31 10.07-7.96 16.64-7.96 5.39 0 9.83 1.74 13.31 5.23 3.49 3.41 5.23 7.77 5.23 13.08 0 4.6-1.43 8.48-4.28 11.65-2.85 3.09-6.14 4.64-9.87 4.64-1.43 0-3.41-0.4-5.94-1.19-2.14-0.63-3.57-0.95-4.28-0.95-1.35 0-2.420.55-3.21 1.66-0.87 1.11-1.31 2.78-1.31 4.99 0 5.94 2.97 11.37 8.92 16.29 6.02 4.83 13.39 7.25 22.11 7.25 9.9 0 17.71-3.41 23.42-10.22 5.71-6.89 8.56-16.48 8.56-28.77v-112.57c0-3.09-1.07-5.39-3.21-6.89-2.06-1.58-5.63-2.38-10.7-2.38h-15.57v-8.91zM360.73 361.77c4.57 17.07 53.29 38.92 52.31 70.01-0.57 18.19-13.46 28.36-27.07 28.04-9.31-0.22-18.98-5.35-25.24-16.19-15.05 26.06-53.44 19.31-52.45-11.85 1.04-32.44 47.45-51.36 52.45-70.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCardJackHearts;
