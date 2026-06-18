import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-quad9",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiQuad9 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.82 24h5.61l6.33-9.48c1.46-2.18 2.29-4.2 2.29-6.4C21.05 3.46 17.14 0 12 0 6.82 0 2.95 3.49 2.95 8.21c0 4.51 3.46 8 8.35 8 0.41 0 0.76-0.02 1.08-0.07zM12 12.13c-2.43 0-4.21-1.63-4.21-3.96 0-2.34 1.79-3.96 4.22-3.96 2.41 0 4.22 1.62 4.22 3.96 0 2.32-1.81 3.96-4.21 3.96z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiQuad9;
