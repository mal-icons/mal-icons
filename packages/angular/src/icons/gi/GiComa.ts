import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-coma",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiComa {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M264.44 17.09c-65.79 0-122.04 41.78-145.62 93.41-20.03 34.08-31.84 74.99-31.84 118 0 73.85 20.42 140.63 52.81 188.41 32.4 47.78 76.16 76.28 123.85 76.28 47.690 91.45-28.5 123.84-76.28 32.39-47.78 52.81-114.55 52.81-188.41 0-41.82-10.43-80.8-28.31-113.53-22.3-53.66-79.85-97.88-147.53-97.88zm0 18.69c72.46 0 132.26 60.31 138.25 117.56H267.06l-6.22-22.62-9-32.78-9 32.78-10.5 38.22-16.84-61.28-9.03-32.78-9 32.78L185 152.97h-58.81c6.22-57.15 65.95-117.19 138.25-117.19zm-57.97 109.66l16.85 61.25 9.03 32.78 9-32.78 10.5-38.25 1 3.59h149.81c-5.97 55.66-64.63 101.03-138.22 101.03-73.75 0-132.57-45.58-138.31-101.41h73.12l1.91-6.87 5.31-19.34zm-71.78 139.41c18.36 18.1 37.53 26.73 55.72 27.53 18.190.8 35.93-6.09 52.13-21.5l12.88 13.56c-19.21 18.27-42.28 27.66-65.84 26.63-23.56-1.03-47.1-12.33-68-32.94l13.13-13.28zm264.75 0l13.13 13.28c-20.9 20.61-44.44 31.91-68 32.94-23.56 1.03-46.63-8.35-65.84-26.62l12.87-13.56c16.2 15.4 33.97 22.3 52.16 21.5 18.19-0.8 37.33-9.43 55.69-27.53zM266.53 419.59c26.46-0.07 52.92 3.19 79.35 10.03l-4.69 18.1c-49.81-12.9-99.4-12.4-149.370.03l-4.53-18.12c26.34-6.55 52.8-9.96 79.25-10.03z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiComa;
