import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-swirl-ring",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSwirlRing {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M231.07 20.85c130.56 79.7 225.31 195.89 220.76 277.41-0.37 6.68-1.85 12.83-3.5 18.69-11.48-92.34-130.19-218.09-279.16-290.25-4.34-2.1-8.55-3.87-12.85-5.84H20.82v7c32.33 6.41 67.26 16.19 103.96 30.37C287.93 121.26 421.31 237.91 423.21 318.7c0.13 5.78-0.56 11.26-1.75 16.35-18.23-79.44-144.17-184.84-296.1-243.53C88.46 77.26 53.27 66.96 20.82 60.57v49.64c164.21 24.05 386.08 133.88 366.14 290.65-9.53 74.94-113.13 76.27-159.74 35.17 45.33 72.98 186.19 70.61 235.7 21.09 75.81-75.81 25.19-249.3-112.72-387.2-17.78-17.78-36.23-34.28-54.9-49.06h-64.24zm7.3 236.1c-15.490.03-29.21 4.78-39.15 14.72v0c-18.66 18.66-18.67 50.7-3.94 82.69 1.35-13.85 6.2-26.33 15.75-35.88 27.67-27.66 80.46-20.16 117.69 17.06 23.26 23.27 34.89 52.86 33.69 78.31 15.03-30.09 1.19-77.56-35.87-114.63-27.35-27.35-60.55-42.32-88.16-42.28zm16.18 63.83c-12.810.1-22.82 4.54-26.41 13.02-6.38 15.06 9.98 37.14 36.54 49.33 26.56 12.18 53.26 9.85 59.64-5.21 6.38-15.06-9.98-37.15-36.54-49.33-11.62-5.33-23.26-7.88-33.22-7.8zm-41.02 22.23c-11.47 19.11-0.91 49.24 27.37 72.76 32.57 27.1 76.03 35.06 97.14 17.5 14.24-11.84 14.24-32.18 3-52.49-1.03 8.79-4.73 16.71-12.02 22.78-21.11 17.56-61.39 12.8-89.8-10.83-17.75-14.77-26.62-33.55-25.7-49.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSwirlRing;
