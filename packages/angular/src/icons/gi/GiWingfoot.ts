import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-wingfoot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiWingfoot {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M494.25 21.13l-164.53 1.25c-15.46 27.98-33.91 52.67-54.16 75.8 6.01 1.5 12.07 3 18.03 4.5l13.69 3.45-8.53 11.25c-50.41 66.5-44.63 142.09-27.36 213.69l-18.17 4.38c-16.84-69.82-23.53-148.19 22.64-217.94-88.07-21.9-183.62-43.43-253.37-89.38-1.77 4.89-1.01 10.19 2.26 17.23 2.43 5.22 6.52 11.04 12.14 17.12 53.16 37.94 130.46 65.95 189.78 75.17l-2.87 18.47c-61.85-9.62-139.64-37.4-196.04-77.230.61 5.95 2.61 12.39 6.39 19.36 6.92 12.76 19.27 26.49 35.7 38.910.840.64 1.7 1.26 2.56 1.89 42.56 22.68 93.7 38.91 140.74 42.16l-1.29 18.64c-61.15-4.22-126.33-28.22-175.67-60.74 1.03 4.92 3.25 10.4 6.89 16.38 7.37 12.14 20.08 25.48 36.23 37.67 39.26 17.84 81.6 32.94 128.62 36.47l-1.4 18.64C150.41 244.06 101.38 224.54 57.41 203.57c3.7 19.62 17.29 34.4 38.93 46.81 26.82 15.37 65.26 25.42 105.82 31.33l7.46 1.090.52 7.52c1.07 15.51 4.57 22.83 9.74 31.67l-16.13 9.44c-4.93-8.43-9.29-18.45-11.29-32.44-32.3-5.09-63.4-12.62-89.36-24.26-6.44 7.75-12.78 15.74-18.99 24.03 16.52 23.76 30.6 43.04 52.78 65.78l27.1-9.47 9.34-3.25 2.72 9.53c15.07 53.05 59.56 93.56 113.6 113.81 48.01 17.99 103 19.63 150.060.59-68.67-37.58-114.62-123.71-135.78-199.87l-1.12-4.16 2.38-3.56C348.53 203.28 425.85 148.88 494.25 123.97V21.12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiWingfoot;
