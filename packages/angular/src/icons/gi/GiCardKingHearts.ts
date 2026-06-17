import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-card-king-hearts",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCardKingHearts {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M119.44 36c-16.13 0-29.2 17.24-29.2 38.5v363c0 21.26 13.07 38.5 29.2 38.5h275.3c16.13 0 29.2-17.24 29.2-38.5v-363c0-21.26-13.07-38.5-29.2-38.5H119.44zm57.21 16.17h0c13.61-0.32 26.5 9.86 27.07 28.040.98 31.09-47.74 52.95-52.31 70.02-5-18.65-51.41-37.57-52.45-70.01-0.99-31.16 37.4-37.91 52.45-11.85 6.26-10.85 15.92-15.98 25.24-16.19zm-15.61 116.52h80.36v8.92h-17.12c-3.64 0-6.460.95-8.44 2.85-1.98 1.9-2.97 4.32-2.97 7.25v81.66l66.21-70.73c3.8-4.12 5.71-8 5.71-11.65 0-2.77-1.31-5.03-3.92-6.77-2.61-1.74-6.89-2.62-12.84-2.62h-4.87v-8.92h72.16v8.92h-5.59c-4.83 0-10.14 1.43-15.93 4.28s-11.13 6.82-16.05 11.89l-40.77 42.44 58.37 86.06c3.25 4.84 6.62 8.28 10.1 10.34 3.49 1.98 7.61 2.97 12.36 2.97h6.42v8.91H264.93v-8.91h9.03c6.58 0 10.94-0.56 13.08-1.66 2.22-1.11 3.33-2.5 3.33-4.16 0-1.51-0.47-3.01-1.43-4.52l-48.5-71.32-27.58 29.6v43.27c0 2.690.79 4.67 2.38 5.94 2.54 1.9 5.55 2.85 9.04 2.85h17.12v8.91h-80.36v-8.91h15.45c3.96 0 6.9-0.79 8.8-2.38 1.9-1.66 2.85-3.8 2.85-6.42V186.4c0-2.77-1.07-4.91-3.21-6.42-2.14-1.58-5.74-2.38-10.82-2.38h-13.08v-8.92zM360.73 361.77c4.57 17.07 53.29 38.92 52.31 70.01-0.57 18.19-13.46 28.36-27.07 28.04h0c-9.31-0.22-18.97-5.35-25.23-16.19-15.05 26.06-53.44 19.31-52.45-11.85 1.04-32.44 47.45-51.36 52.45-70.01z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCardKingHearts;
