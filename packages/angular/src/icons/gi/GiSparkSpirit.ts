import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-spark-spirit",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSparkSpirit {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M420.4 19.87c37.89 49.48 19.76 88.21-39.8 90.79 15.37-23.54 18.57-50.76-1.5-72.21 15.56 37.32-14.4 62.85-50.14 67.1-4.39-0.93-8.89-1.99-13.51-3.19-60.13-15.62-114.53 22.94-137.37 78.92-0.43-34.33 9.72-68.38 29.83-102.15-50.37 35.04-75.93 89.32-72.62 166l-59.41-65.36L89.55 374.43 254.15 494.03 392.7 389.54l52.58-196.85-93.22 72.42c-23.56-25.65-13.02-55.2 33.74-50.29-38.08-22.19-64.97-2.47-75.95 24.36-5.61-27.82 18.21-63.12 50.22-58.69 76.73 10.64 151.88-107.83 60.34-160.61zM119.84 272.05l94.78 73.21-103.09-21.22 29.26-3.05-20.94-48.94zm255.48 12.24l-10.62 25.26 27.8-0.28-12.09 23.44-96.25 14.44 91.17-62.86zM204.31 360.13l42.26 62.55 11.25-44.09 17.84 32.6 56.57-48.54-7.23 24.37 51.71-21.27-54.48 61.82 9.65-29.97-76.21 71.62-47.57-55.14 3.18 27.48-74.63-77.59 61.17 30 6.51-33.83z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSparkSpirit;
