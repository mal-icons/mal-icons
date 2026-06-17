import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-pummeled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiPummeled {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M264.44 19.41c-44.54 0-85.32 25.5-115.56 68.31-30.24 42.81-49.34 102.72-49.34 169.06 0 66.34 19.11 126.22 49.35 169.03 30.24 42.81 71.03 68.31 115.56 68.31 5.57 0 11.06-0.41 16.5-1.19h-5.22v-101.03c-3.05-0.11-6.15-0.19-9.28-0.19-42.64 0-77.88 10.71-89.59 25.06-12.25-31.8 31.85-44.78 79.94-45.28 3.21-0.03 6.43-0.01 9.660.06 13.40.32 29.62 1.36 44.81 3.81v-96.5c-7.8-4.31-13.24-10.1-14.5-17.16 34.81 11.84 95.23 3.38 105.28-3.53-6.27 26.1-43.59 33.29-72.09 27.31v93.88c15.12 4.21 26.88 10.5 29.94 19.84H360v0.37c0.86 2.860.91 6 0 9.44V450c7.07-7.28 13.76-15.36 20-24.19 30.24-42.81 49.31-102.69 49.31-169.03 0-66.34-19.07-126.25-49.31-169.06-30.24-42.82-71.03-68.31-115.56-68.31zM180.03 196.09c31.53 0 57.76 21.39 63.35 49.66-12.99-12.15-36.66-22.04-63.72-25.19-21.95-2.55-41.68-0.15-55.28 5.72 11.18-18.06 31.91-30.19 55.66-30.19zm-63.09 73.31c13.18 11.73 36.34 21.21 62.72 24.28 22.43 2.61 42.50.02 56.12-6.12-11.16 18.15-31.94 30.38-55.75 30.38-31.1 0-57.03-20.83-63.09-48.53zm177.47 123.91v96.88c16.58-4.4 32.35-12.38 46.91-23.5v-61.09c-11.7-5.73-28.01-10.08-46.91-12.28z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiPummeled;
