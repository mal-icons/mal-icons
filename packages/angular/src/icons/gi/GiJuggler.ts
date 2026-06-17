import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-juggler",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiJuggler {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M282.06 20.94c-18.88 0-33.87 15.56-33.87 34.44 0 18.88 15 33.88 33.88 33.88s33.88-15 33.88-33.87c0-18.87-15-34.44-33.87-34.44zM129.91 82.09c-18.87 0-33.87 15.59-33.87 34.47 0 18.88 15 33.87 33.88 33.87 18.88 0 33.88-15 33.88-33.87 0-18.88-15-34.47-33.87-34.47zm284.28 22.66c-18.87 0-33.87 15.59-33.87 34.47 0 18.88 15 33.87 33.88 33.87 18.88 0 33.88-15 33.88-33.87 0-18.88-15-34.47-33.87-34.47zm-162.25 57.56c-3.240-6.510.42-9.72 1.28-25.66 6.88-39.12 39.76-30.09 73.44 3.5 13.07 9.88 24.32 17.88 32.81-19.23 4.53-34.14 13.47-40.5 24.5l-0.41-0.09-41.59 64.44-50.69-21.94c-29.38-16.12-61.57 24-30.62 41.69l94.47 44.06 38.03-50.06c21.49 38.74 15.75 77.48-25.12 116.25H342.75c-39.82-38.2-42.44-76.42-23.28-114.62l36.81 48.44 94.47-44.06c11.64-6.65 14.33-16.47 11.63-25.28-8.18 5.26-17.91 8.34-28.34 8.34-14.22 0-27.12-5.72-36.59-14.94l-28 12.13-41.59-64.44h-0.03c-5.48-9.42-17.23-17.28-32.53-22.19 11.58-14.22 15.92-36.9 9.75-59.94-7.9-29.47-30.4-49.8-53.09-49.81zm-164.12 61.03c-18.87 0-33.87 15.56-33.87 34.44 0 18.88 15 33.88 33.87 33.88 18.88 0 33.88-15 33.88-33.87 0-18.87-15-34.44-33.88-34.44zm346.22 51.13c-18.88 0-33.88 15.59-33.88 34.47 0 18.88 15 33.88 33.88 33.88 18.88 0 33.88-15 33.88-33.87 0-18.87-15-34.47-33.87-34.47z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiJuggler;
