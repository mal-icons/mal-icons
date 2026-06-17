import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-dinosaur-egg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiDinosaurEgg {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M304.81 31c-2.68 0-5.370.06-8.060.19-12.290.57-24.67 2.45-36.97 5.75-49.2 13.2-116.72 54.89-166.97 106.41-50.25 51.52-82.37 112.03-68.97 162.13 13.73 51.29 64.74 99.78 125.56 131.22 60.82 31.43 130.98 45.44 179.09 32.53 48.11-12.91 96.36-58.45 128.16-114.59 31.8-56.14 46.91-122.3 33.03-174.16C465.62 90.53 387.89 30.98 304.82 31zm-13.87 32.16c23.910.35 42.99 8.25 51.59 23.56 17.22 30.63-14 79.41-69.75 108.97-55.74 29.55-114.91 28.66-132.12-1.97-17.21-30.63 14.04-79.42 69.78-108.97 27.88-14.78 56.6-21.95 80.5-21.59zm175.97 122.66c25.96 97.01-56.26 238.79-147.09 263.16-55.23 14.82-136.13-7.74-196.91-49.5 136.66 62.11 320.14 11.95 344-213.66zM96.75 205.75c20.86 0 37.75 16.89 37.75 37.75s-16.89 37.78-37.75 37.78-37.78-16.92-37.78-37.78 16.92-37.75 37.78-37.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiDinosaurEgg;
