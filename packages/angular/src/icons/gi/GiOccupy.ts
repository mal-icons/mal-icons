import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-occupy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiOccupy {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M195.69 21.72v20h-81v48h81v38h-55v178h-16l-16-64-16 64h-16v87h-44v18h76.5l-42.34 27.62 5.82 16.49 98.3-9.94 30.93 44.61 72.69-39.73 78.85 40.52 16.98-43.44 108.9 17.94-54.14-54.06h47.52v-18h-28v-87h-32v-128h-32l-64-96v192h-64v-64l-32-0.75v-81.25h-7v-106zm179.73 266.34l6.35 16.84-77.67 29.26 68.98 19.58-23.34 23.49c4.33 3.17 7.95 7.56 7.95 13.87 0 7.96-5.75 12.86-11.44 16.12-2.26 1.3-4.74 2.45-7.43 3.51h60.88l27.23 27.18-67.96-11.19-15.02 38.45-69.6-35.76-66.86 36.55-27.76-40.03-72.04 7.28 34.46-22.48h40.42c-2.69-1.06-5.18-2.22-7.43-3.51-5.68-3.26-11.43-8.16-11.43-16.12 0-7.96 5.75-12.86 11.44-16.12a51.19 51.19 0 0 1 4.08-2.09l-8.7-12.83 52.64-21.6 4.47-29.3h57.86l2.27 11.94zm-114.73 90.66c-23.71 0-45.2 2.38-60.1 6-23.65 5.15-17.73 8.35 0 12.72 14.91 3.62 36.39 6 60.1 6s45.2-2.38 60.1-6c23.66-5.14 17.74-8.35 0-12.72-14.9-3.62-36.39-6-60.1-6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiOccupy;
