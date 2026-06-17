import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-link-45deg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsLink45deg {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.72 6.54 3.34 7.91a3 3 0 1 0 4.24 4.24l1.83-1.83A3 3 0 0 0 8.59 5.5L8 6.09a1 1 0 0 0-0.150.2 2 2 0 0 1 0.86 3.34L6.88 11.45a2 2 0 1 1-2.83-2.83l0.79-0.79a4 4 0 0 1-0.13-1.29z"}],["path",{"d":"M6.59 4.67A3 3 0 0 0 7.41 9.5l0.78-0.78a2 2 0 0 1-0.9-3.35L9.12 3.55a2 2 0 1 1 2.83 2.83l-0.790.79c0.110.420.160.860.13 1.29l1.37-1.37a3 3 0 1 0-4.24-4.24z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsLink45deg;
