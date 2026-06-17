import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-pillow",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPillow {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M433.79 59.6c-8.940.05-20.65 3.08-34.97 9.88C295.2 62.25 170.14 77.35 86.79 103.54c-60.41-27.91-70.4-0.43-42.95 36.19C10.24 239.45 24.97 340.8 60.7 413.31c-11.01 47.63 16.97 45.5 41.17 26.45 170.77 9.1 281.83-16.52 349.88-68.67 24.01 19.23 41.66-6.01 31.87-36.86 11.92-71.81-9.07-167.31-36.09-233.78 13.36-23.47 8.02-40.97-13.74-40.86zm-357.39 77.96c52.65 61.05 53.61 200.38 21.75 283.4 7.05-90.91 2.51-223.67-21.75-283.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPillow;
