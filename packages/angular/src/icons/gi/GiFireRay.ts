import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-fire-ray",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiFireRay {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M12.2 20.94v39.13c76.45 73.03 151.39 152.57 187.47 215.5 12.6 21.98 38.11 72.97 49.06 118.56-31.42-3.39-64.76-14.63-96.36-33.87 11.61 19.02 25.57 37.84 42.63 54.9 83.9 83.9 200.55 103.14 260.47 43.22 59.93-59.93 40.68-176.57-43.22-260.47-17.06-17.06-35.87-31.03-54.89-42.63 21.32 35.01 33.27 71.95 35.04 106.29-47.3-13.44-103.76-38.56-127.32-51.98C201.59 173.43 121.32 98.07 47.82 20.94H12.2zM374.89 285.87c47.63 0 86.56 36.3 90.73 82.82-12.22-22.7-36.21-38.13-63.8-38.13-39.99 0-72.42 32.42-72.42 72.42 0 5.460.61 10.78 1.76 15.9 2.84-21.18 21.1-37.67 43.02-37.67 23.87 0 43.41 19.55 43.41 43.41 0 23.87-19.55 43.41-43.41 43.41-1.59 0-3.16-0.09-4.7-0.260.110.060.230.120.340.18-48.05-2.62-86.03-42.24-86.03-90.96 0-50.43 40.68-91.11 91.1-91.11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiFireRay;
