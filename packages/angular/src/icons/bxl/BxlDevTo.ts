import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bxl-dev-to",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxlDevTo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.83 10.08a0.780.78 0 0 0-0.47-0.17h-0.7v4.2h0.7a0.790.79 0 0 0 0.47-0.17c0.16-0.120.23-0.290.23-0.52v-2.8c0-0.23-0.08-0.41-0.23-0.52zM19.24 3H4.76C3.79 3 3 3.79 3 4.76v14.48c00.970.79 1.76 1.76 1.76h14.47c0.97 0 1.76-0.79 1.76-1.76V4.76A1.77 1.77 0 0 0 19.24 3zM9.2 13.41c0 0.76-0.47 1.9-1.94 1.9H5.39V8.66h1.9c1.42 0 1.9 1.14 1.9 1.9v2.85zm4.05-3.56H11.1v1.54h1.31v1.19H11.1v1.54h2.14v1.19h-2.5a0.810.81 0 0 1-0.83-0.79V9.5a0.810.81 0 0 1 0.79-0.83h2.54l0 1.19zm4.17 4.63c-0.53 1.24-1.480.99-1.91 0l-1.55-5.82h1.31l1.19 4.57 1.19-4.57h1.31l-1.55 5.82z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxlDevTo;
