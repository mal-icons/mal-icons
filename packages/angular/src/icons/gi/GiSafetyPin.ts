import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-safety-pin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSafetyPin {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M453.1 68.55c-15.57-15.57-39.25-25.55-62.63-27.54-23.38-1.98-45.7 4.1-58.84 17.24l-55.59 55.59 40.06 40.05 58.76-15.03a23.29 21.14 45 0 1 1.99-26.99 23.29 21.14 45 0 1 31.42 1.52 23.29 21.14 45 0 1 1.52 31.42 23.29 21.14 45 0 1-27 1.99l-15.03 58.76L407.8 245.62l55.59-55.59c13.14-13.14 19.22-35.46 17.24-58.84-1.98-23.38-11.96-47.06-27.54-62.63zM208.49 21.34l-28.57 43.08-140.32 327.15c-14.33 25.32-10.75 58.19 10.77 79.71 25.84 25.84 68.05 25.84 93.89 0l15.32-15.32c3.48-9.32 5.35-20.68 4.01-33.59-0.48-16.35-6.91-32.55-19.33-44.97-18.61-18.61-45.71-23.81-69.07-15.62l124-289.09 9.3-51.34zm150.72 205.34l-177.68 177.68c2.31 9.15 3.35 17.96 3.34 26.31L374.03 241.5l-14.82-14.82zM129.43 392.22c17.83 17.83 17.83 46.41 0 64.24-17.83 17.83-46.41 17.83-64.24 0-11.94-11.94-15.87-28.7-11.82-43.82l5.09-11.87c1.86-3.03 4.09-5.91 6.72-8.54 17.83-17.83 46.41-17.83 64.24 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSafetyPin;
