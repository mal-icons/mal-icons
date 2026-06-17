import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-mexico",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiMexico {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M17.91 93.76c19.4 67.24 47.03 124.21 79.36 187.17l27.56-8.37c-34.34-52.44-62.49-96.45-72.16-152.82l24.23 6.32c12.38 75.41 79.95 133.44 109.21 168.56 4.91 16.390.59 32.78-4.92 46.35 51.62 25.1 104.67 57.56 163.29 69.53 22.01-17.21 44.26-27.73 68.13 7.73l9.83-28.09 23.18-0.7L432.64 361c22.37 8.04 50.34-16.05 50.92-22.83 1.68-19.430.5-31.36 10.54-47.06l-55.84 7.73c-1.37 16.26 1.58 34.77-15.1 44.25-88.44 50.23-115.31-62.39-107.46-109.56-36.36-16.02-41-34.96-62.51-68.13l-22.47-2.81-15.45 13.35-40.03-51.27z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiMexico;
