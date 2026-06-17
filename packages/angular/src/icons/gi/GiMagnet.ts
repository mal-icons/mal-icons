import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-magnet",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMagnet {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M146.06 25.66c-30.860.07-60.56 12.05-85.09 36.31C3.29 119 12.99 194.42 63.91 245.34c12.04 12.04 47.12 35.39 78.75 55.44l36.94-36.97c-23.06-18.33-46.26-37.23-54.37-45.34-38.19-38.19-42.6-75.96-13.44-105.13 29.17-29.17 66.48-24.61 105.13 14.03 8.09 8.09 26.93 31.05 45.22 53.91l37.03-37.03c-20.05-31.62-43.33-66.74-55.37-78.78-30.68-26.48-64.87-39.89-97.72-39.81zM309.38 160.47L273.85 196c13.1 16.54 24.53 31.2 29.5 37.66l31.53-31.53s-10.95-18.31-25.5-41.66zm54.13 33.12c-31.96 73.94-90.17 135.65-167.31 169.22 96.67-10.86 166.86-86.76 167.31-169.22zm58.44 0C378.81 293.36 300.23 376.62 196.16 421.91c130.43-14.65 225.17-117.06 225.78-228.31zm72.53 0C437.49 325.41 333.7 435.41 196.19 495.25c172.33-19.36 297.47-154.66 298.28-301.66zM194.35 275.5l-35.44 35.44c23.35 14.55 41.66 25.5 41.66 25.5l31.53-31.53c-6.44-4.96-21.14-16.33-37.75-29.41z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMagnet;
