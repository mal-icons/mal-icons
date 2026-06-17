import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-cat",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCat {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M463.46 37.01l-30.69 50.74-7.04-2.28c-27.15-8.8-71.53-7.15-97.60.11L321.22 87.5l-28.68-48.54c-33.63 69.25-32.26 117.56-14.79 148.57 18.71 33.21 57.38 49.09 99.12 48.57 48.74-0.61 88.97-19.66 107.04-54.19 16.92-32.33 15.68-80.46-20.44-144.9zM323.94 137.59c18.450.1 29.36 15.34 31.46 36.64-37.11 17.91-53.96 3.4-61.17-26.54 11.38-7.06 21.32-10.14 29.71-10.1zm109.26 0c8.39-0.04 18.33 3.04 29.71 10.1-7.21 29.94-24.06 44.45-61.17 26.54 2.1-21.31 13.01-36.54 31.46-36.64zm-293.55 50.96c-1.23-0.01-2.450-3.660.02-30.170.54-56.14 10.59-75.74 26.57-43.44 35.43-57.27 100.75-12.82 166.19 20.29 33.99 44.43 54.24 70.8 64.19 32.85 12.4 66.66 8.82 99.94 4.11 33.28-4.71 65.85-10.63 96.9-8.42 31.04 2.21 62.09 10.18 90.51 41.17 19.37 21.13 46.89-1.63 23.82-24.16-35.02-34.21-72.53-47.42-109.38-50.04-36.85-2.62-72.2 4.7-104.21 9.23-32.01 4.53-60.27 6.55-84.56-2.61-14.39-5.43-28.31-14.8-41.55-31.14h351.74c13.67-52.29 14.87-106.37 1.87-142.07-19.76 8.49-42.41 12.9-66.2 13.2h0c-29.850.37-59.46-6.92-82.91-22.82-4.65 3.01-9.41 6.23-14.29 9.69l-5.73 4.06-5.49-4.38c-46.63-37.2-91.03-52.48-129.03-52.77z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCat;
