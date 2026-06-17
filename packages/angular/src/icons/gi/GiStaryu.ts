import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-staryu",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiStaryu {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M246.31 24.56l-66.12 133.78L222.25 216c9.1-7.82 17.13-17.24 24.06-28.5V24.56zm18.690.63v162.41c6.37 11.47 14.18 21.06 23.38 29L331 158.25 265 25.19zM164.19 168.09L20.85 188.97l156.53 51.09c10.75-3.27 20.69-7.58 29.78-13.09l-42.97-58.88zm182.78 0L303.59 227.5c9.34 5.51 19.77 9.78 31.28 12.97l157.88-51.19-145.78-21.19zm-91.53 33.84c-17.96 25.96-42.38 42.9-71.25 52.22 22.83 23.29 29.08 53.56 26.78 85.66 30.11-12.9 60.6-9.37 89.87 1.44-2.02-31.53 4.76-61.7 27.16-86.66-30.68-9.16-55.66-26.35-72.56-52.66zM13.25 206.16l106.72 104 68.94-22.34c-5.1-11.62-13.2-22.02-25.22-31.12l-3.37-2.53-147.06-48zm482.16 1.91L349.19 255.5l-0.970.84c-11.15 9.76-18.93 20.3-24.09 31.63l67.38 21.97 103.91-101.87zm-301.06 97.63l-68.72 22.28-25.72 146.75 28.81-39.47 66.31-90.81c1.52-13.88 1.53-26.83-0.69-38.75zm123.91 0c-2.72 12.42-3.01 25.66-1.59 39.72l93.56 128.25-24.66-146.03-67.31-21.94zm-71.94 41.22c-12.810.77-25.57 4.36-38.47 11.66l-64.03 87.72-26.91 36.85 129.41-67.81v-68.41zm18.690.75v67.72l129.63 68.6-91.25-125.09c-13.05-5.49-25.79-9.5-38.37-11.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiStaryu;
