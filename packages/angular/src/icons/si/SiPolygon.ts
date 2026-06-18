import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-polygon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiPolygon {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m17.82 16.34 5.69-3.29A0.980.98 0 0 0 24 12.21V5.64a0.980.98 0 0 0-0.49-0.85l-5.69-3.29a0.980.98 0 0 0-0.98 0L11.15 4.79a0.980.98 0 0 0-0.490.85v11.75L6.67 19.69l-3.99-2.3v-4.61l3.99-2.3 2.63 1.52V8.9L7.16 7.66a0.980.98 0 0 0-0.98 0L0.49 10.95a0.980.98 0 0 0-0.490.85v6.57a0.980.98 0 0 0 0.490.85l5.69 3.29a0.980.98 0 0 0 0.98 0l5.69-3.29a0.980.98 0 0 0 0.49-0.85V6.62l0.07-0.04 3.92-2.26 3.99 2.31v4.61l-3.99 2.3-2.63-1.52v3.09l2.14 1.24a0.980.98 0 0 0 0.98 0v0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiPolygon;
