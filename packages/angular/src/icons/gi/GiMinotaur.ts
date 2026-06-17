import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-minotaur",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMinotaur {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M110 18.91c-3.77 9.01-2.94 15.91-2.94 28.03 0 27 24.08 48.41 52.56 52.56 19.28 2.81 39.32 4.76 59.59 5.81-8.56 7.39-13.91 18.09-13.91 35.12 0 17.58 6.44 37.86 16.56 52.97 10.13 15.11 23.23 24.37 36.03 24.37 12.8 0 25.91-9.26 36.03-24.37 10.13-15.11 16.56-35.39 16.56-52.97 0-17.19-5.43-27.95-14.12-35.34 19.05-1.09 37.85-2.95 56-5.59 28.49-4.15 51.47-23.72 52.56-52.560.37-9.72-1.64-18.74-2.94-28.03-2.94 27.71-26.2 45.69-54.31 49.66-59.83 8.44-123.54 8.44-183.37 0-28.11-3.97-51.37-21.94-54.31-49.66zm79.78 99.31c-248.93 7.21-200.63 194.29-22.12 242.5 40.81-39.46-6.55-101.94-43.72-57.03-23.22-43.47-20.67-82.77 4.5-95.03 48.72 27.07 83.57 88.52 86.13 148.41-33.59 23.15-59.62 63.03-59.62 63.03l26.34 38.78-41.31 23.5h82.12c-40.51-40.52-11.77-86.09 36.22-86.09 48.65 0 74.12 48.22 36.25 86.1h81.28l-40.47-23.5 26.35-38.78s-26.46-40.5-60.44-63.56c2.74-59.72 37.52-120.89 86.1-147.87 25.18 12.26 27.72 51.56 4.5 95.03-37.17-44.9-84.53 17.58-43.72 57.03 178.5-48.21 226.79-235.28-22.12-242.5 2.05 6.73 3.16 14.17 3.16 22.22 0 21.95-7.42 45.02-19.72 63.38-12.29 18.35-30.17 32.66-51.56 32.66-21.39 0-39.27-14.31-51.56-32.66-12.3-18.35-19.72-41.43-19.72-63.37 0-8.05 1.11-15.49 3.16-22.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMinotaur;
