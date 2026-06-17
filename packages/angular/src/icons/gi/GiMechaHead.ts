import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-mecha-head",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMechaHead {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M246.49 29.5l-13.24 39.73 14.38 86.28h16.75l14.38-86.27L265.52 29.5h-19.03zM195 61.5l-40 30h63.71l-3.95-23.72 2.09-6.27H195zm100.15 0l2.09 6.28-3.95 23.73H357l-40-30h-21.85zM69.42 90.73L41.64 257.41 71 286.77V162.38l20.86-41.72L69.42 90.73zm373.16 0l-22.44 29.92L441 162.38v124.4l29.36-29.36-27.78-166.68zM117.56 109.5L89 166.63V400l110 82.5v-87.91l-80-32V211.58l35.39-72.08h72.32l-5-30H117.56zm172.73 0l-5 30h72.27L393 210.38v152.22l-80 32V482.5L423 400V166.63L394.44 109.5H290.29zm-124.68 48L137 215.76v3.74h238v-4.87L346.44 157.5h-64.15l-2.67 16h-47.25l-2.67-16h-64.1zM137 237.5v46h30v-46h-30zm96 0v46h46v-46h-46zm112 0v46h30v-46h-30zm-208 64v48.91l46.68 18.67 27.03-67.58H137zm93.09 0l-29.7 74.26L217 382.41v51.07l39 9.75 39-9.75v-51.07l16.61-6.64-29.7-74.26h-51.82zm71.2 0l27.03 67.58L375 350.41V301.5h-73.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMechaHead;
