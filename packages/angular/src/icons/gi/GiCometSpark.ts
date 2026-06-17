import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-comet-spark",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiCometSpark {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M20.92 15.65c147.95 202 202.56 312.65-3.15 252.44 201.76 82.93 225.52 176.51 49.13 180.76 190.92 51.16 315.06 60.26 377.16 10.43 67.76-54.37 62.6-177.65 13.31-361.60 179.94-88.34 149.94-171.18-39.96 60.25 191.39-81.41 116.35-265.27-42.07zM457.37 97.68v-0.010.01zm-79.79 150.84c5.460.05 10.990.79 16.51 2.27 3.76 1.01 7.35 2.34 10.77 3.92-0.05-0.06-0.1-0.12-0.15-0.18 51.25 21.08 79.99 77.26 65.25 132.25-16.01 59.74-77.17 95.05-136.91 79.05-59.29-15.89-94.51-76.24-79.39-135.55 1.14 7.84 3.71 15.47 7.81 22.56 15.04 26.05 46.48 37.74 78.74 32.33 8.39-0.38 17.33-2.93 25.75-7.79 22.18-12.81 32.32-36.77 22.64-53.53-9.68-16.76-35.5-19.97-57.68-7.16-7.3 4.21-13.28 9.64-17.7 15.62-3.05-11-3.31-22.93-0.14-34.75 7.98-29.78 35.05-49.34 64.52-49.05z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiCometSpark;
