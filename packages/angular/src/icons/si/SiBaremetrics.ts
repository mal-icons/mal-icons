import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-baremetrics",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiBaremetrics {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.11 7.95l1.49 2.46a3.51 3.51 0 10 3.28l-4.5 7.72a3.33 3.33 0 1-2.94 1.79H7.83a3.34 3.34 0 1-2.94-1.79l-1.55-2.63 6.14-5.69 4.45 2.58a1.09 1.09 0 1.46-0.2zm-13.390.63L1.99 16.150.41 13.73a3.5 3.5 0 10-3.27L5.16 2.59A3.34 3.34 0 18.10.8h8.01c1.23 0 2.360.69 2.94 1.79l1.62 2.72-6.02 5.59-4.43-2.57a1.1 1.1 0 0-1.50.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiBaremetrics;
