import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-wood-frame",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiWoodFrame {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M100.3 19.86l-36.62 2.02-0.72 13.1a16 16 0 0 1 5.18-0.86 16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 2.38-8.4l-6.44-18.98-15.630.86-0.78 377.3 23.01-0.80.55-105.9 12.23 105.5 46.84-1.6zm353.5 11.6L121.5 41.71l2.6 58.39L485 85.15l3.5-36.38zm7 72.74l-25.4 1-15 39-13.2-37.8-22.5 1-2.8 83.3 7.6 34-9.5 24.1-7.5 226.6 14.10.7 11.3-33.5 11.3 34.7 4.70.3 14.1-21.1 4.6 22 18.3 1zm-61.1 299a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm85.30.8l-14.10.5-1.9 75.2 16.2-0.1zm-128.3 4.2l-93 3-43.7 20.3-22-18.1-174.24 5.7-0.28 63.8 330.82-2.3 1.3-40c-12.9-0.3-87.9-2.3-89.6-2.3-1.6 0 69-9.9 90.1-13zM103 431.7a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-15.96-16 16 16 0 0 1 15.96-16zm-51.480.3a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiWoodFrame;
