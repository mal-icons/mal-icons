import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-diagram",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDiagram {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M146.24 120.33c-23.04 0-52.22 9.79-76.38 31.71-22.6 20.51-40.28 52.01-42.4 94.96H22v18h36v-18H45.48c2.03-38.05 17.27-64.19 36.48-81.63 20.69-18.77 46.56-27.04 64.28-27.04s43.56 8.26 64.23 27.04c15.5 14.07 28.41 33.83 33.91 60.94 3.68-1.48 7.68-2.31 11.86-2.31 2.08 0 4.110.21 6.080.59-6.12-31.68-21.29-55.78-39.75-72.55-24.14-21.92-53.3-31.71-76.33-31.71zm-9 40.09V247H130v18h36v-18h-10.76v-86.58h-18zm119 81.58c-7.84 0-14 6.16-14 14s6.16 14 14 14c7.84 0 14-6.16 14-14s-6.16-14-14-14zM76 247v18h36v-18H76zm108 0v18h36v-18h-36zm108 0v18h36v-18h-36zm54 0v18h11.24v86.08h18V265H382v-18h-36zm54 0v18h36v-18h-36zm54 0v18h13c-2.03 38.05-17.27 64.19-36.48 81.63-20.69 18.77-46.56 27.04-64.28 27.04-17.72 0-43.56-8.26-64.23-27.04-15.5-14.07-28.41-33.83-33.91-60.94-3.68 1.48-7.68 2.31-11.86 2.31-2.08 0-4.11-0.21-6.08-0.59 6.12 31.68 21.29 55.79 39.75 72.55 24.14 21.92 53.3 31.71 76.33 31.71 23.04 0 52.22-9.79 76.38-31.71 22.6-20.51 40.28-52.01 42.4-94.96H490v-18h-36z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDiagram;
