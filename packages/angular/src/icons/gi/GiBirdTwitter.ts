import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-bird-twitter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBirdTwitter {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M77.31 28.44l36.41 51.25L44.87 98.25l34.69 18.53c-37.62 38-62.48 102.74-57.53 198.94V493h147.31v-0.19H269.75c-13.74-59.03-15.37-110.62-5.56-149.87-16.95-7.98-25.13-17.36-32.75-30.37 51.35 21.14 127.62 35.58 200.47 18.59-23.23-10.1-47.07-22.58-70.09-37.16-0.01-0.01-0.02-0.02-0.03-0.03-18-10.51-34.94-22.25-49.97-36.38-9.38-7.88-18.41-16.14-26.91-24.78 36.07-25.5 77.3-40.3 118.66-46.88-7.72 5.1-15.34 10.82-22.69 16.94-18.27 15.21-34.74 32.74-45.31 50.66 4.9 3.99 10.02 7.79 15.31 11.44 9.02-15.52 24.43-33.12 41.97-47.72 24.26-20.19 52.94-34.7 70.06-35.37h0.13c10.890.21 21.610.94 32.06 2.13-10.84-7.65-21.75-14.49-32.72-20.56v-0.25c-0.140.01-0.290.03-0.440.03-54.84-30.27-111.23-41.29-168.03-36.72-21.27-24.23-49.02-40.62-78.66-47.87L77.31 28.44zm74.34 107.31c4.67 0 9.160.75 13.38 2.13-8.49 2.72-14.65 10.67-14.65 20.06 0 11.63 9.43 21.06 21.06 21.06 9.84 0 18.12-6.75 20.44-15.87 1.93 4.91 3 10.25 3 15.84 0 23.87-19.35 43.22-43.22 43.22-23.87 0-43.22-19.35-43.22-43.22 0-23.87 19.35-43.22 43.22-43.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBirdTwitter;
