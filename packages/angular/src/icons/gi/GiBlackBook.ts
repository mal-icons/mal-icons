import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-black-book",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiBlackBook {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M102.59 25.97l90.06 345.78L481.84 395 391.75 49.22 102.59 25.97zm-18.91 1.59c-30.47 11.87-55.68 53.1-49.75 75.31l3.25 11.78c0.67-1.76 1.36-3.52 2.09-5.28C49.19 85.67 65.84 62.61 89.66 50.47l-5.97-22.91zm44.94 18.91l247.81 21.59 80.94 305.16-249.34-20.06L128.63 46.47zM94.53 69.16c-16.66 10.01-29.92 28.07-38 47.41-5.24 12.55-8.04 25.64-8.75 36.53l64.81 235.28c0.29-0.550.57-1.10.88-1.65 10.6-19.25 27.82-37.7 51.12-48.47L94.53 69.16zm74.88 287.56c-17.67 9.07-31.14 23.71-39.56 39-4.46 8.11-7.26 16.36-8.69 23.75l11.69 42.41 1.630.13c-3.82-27.53 11.38-60.45 41.25-81.03l-6.31-24.25zm26.34 34.03c-32.55 17.26-46.49 52.4-41.84 72.91l289.84 24.53c-5.31-7.75-8.64-17.84-8.59-28.34l-22.56-9.06 46.63-7.31-13.59-12.97c5.61-6.91 13.69-13.02 24.78-17.66L195.75 390.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiBlackBook;
