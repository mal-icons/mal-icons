import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-type-bold",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTypeBold {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.21 13c2.11 0 3.41-1.09 3.41-2.82 0-1.31-0.98-2.28-2.32-2.39v-0.05a2.18 2.18 0 0 0 1.85-2.14c0-1.51-1.16-2.46-3.01-2.46H3.84V13zM5.91 4.67h1.7c0.96 0 1.520.45 1.52 1.24 0 0.83-0.63 1.32-1.73 1.32H5.91V4.67zm0 6.79V8.6h1.73c1.22 0 1.880.49 1.88 1.42 0 0.94-0.64 1.45-1.83 1.45H5.91z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTypeBold;
