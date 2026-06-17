import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-all-for-one",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiAllForOne {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M173.63 15.72l16.16 53.81-94.37-48.9L158.47 98.25 45.19 117.41l113.28 19.63-59.72 75.19 65.03-33.41-1.78 58.84 19.84-37.34v-64.22l0.75-1.75 31.91-74.75-40.87-43.87zm146.25 0L282.97 55.34l33.34 79.030.75 1.75V205.85l15.5 29.19-1.62-54.44 65.53 34.06-63.06-77.62 113.28-19.62-113.28-19.16 63.06-77.62-92.44 47.91 15.85-52.81zM249.28 23.56l-49.19 114.5v153.5L235.03 326.5c2.92-65.43 7.98-128.94 15.25-187.72 7.61 61.43 12.74 128.78 15.53 198l32.63-32.62V138.06l-49.16-114.5zM33.13 206.85l37.34 94.06 193.91 193.94h30.81c-66.34-68.5-128.48-139-180.62-205.87 74.71 58.25 155.1 130.33 231.31 205.87h31.06L126.81 244.69l-93.69-37.84zm444.84 0l-93.63 37.81L268.75 360.25l18.16 18.13c36.28-32.1 72.32-62.26 107.13-89.41-27.3 35.02-57.36 71.02-89.31 107.22L325.06 416.5l115.53-115.53 37.38-94.13zM186.06 442.94l-51.91 51.91h28.59c12.6-12.49 25.31-24.87 38.09-37.12l-14.78-14.78zm39.38 39.41c-3.99 4.17-8 8.34-12.03 12.5h24.53l-12.5-12.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiAllForOne;
