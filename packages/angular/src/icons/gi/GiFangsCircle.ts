import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-fangs-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFangsCircle {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M263.06 21.65c-61.94 0-108.82 19.19-147.69 50.87h-0.11l0.010.08C96.2 88.17 79.04 106.73 63 127.54c13.47-7.97 28.17-14.91 43.81-20.82-32.25 37.93-51.84 87.84-51.84 142.4 0 64.49 27.35 122.49 70.66 161.89-22.72-7.12-43.88-16.2-62.63-27.31 48.74 63.22 107.65 105.89 200.06 105.89 90.68 0 154.59-42.81 201.21-105.89-21.02 12.14-45.28 21.96-71.5 29.43 44.68-39.42 73.05-98.35 73.05-164.02 0-55.86-20.53-106.85-54.16-145.1 19.01 6.51 36.74 14.36 52.62 23.52-15.24-20.62-32.33-39.08-51.6-54.58l0.07-0.43h-0.61c-39.58-31.66-88.31-50.88-149.07-50.88zm1.36 59.02c4.490.02 8.970.1 13.450.24l23.57 77.29L323.94 84.41c7.250.88 14.44 1.92 21.55 3.11l32.33 185.52 26.03-149.41c27.01 33.95 43.28 77.67 43.28 125.5 0 64.49-29.56 121.51-75.17 157.16l-24.1-140.22-27.71 161.22c-4.560.52-9.130.98-13.73 1.37l-16.22-62.44-16.68 64.22c-6.070.14-12.140.17-18.210.09l-16.7-64.3-16.32 62.82c-5.24-0.41-10.46-0.9-15.65-1.47l-27.76-161.5-24.78 144.17c-48.57-35.31-80.43-94.18-80.43-161.11 0-51.26 18.69-97.8 49.26-132.64l27.28 156.56L182.63 86.92c7.29-1.18 14.66-2.18 22.07-3.03l22.66 74.32 23.6-77.42c4.49-0.1 8.98-0.13 13.46-0.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFangsCircle;
