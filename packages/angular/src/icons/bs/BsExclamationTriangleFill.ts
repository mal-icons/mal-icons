import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-exclamation-triangle-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsExclamationTriangleFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.98 1.57a1.13 1.13 0 0 0-1.96 0L0.17 13.23c-0.460.780.09 1.770.98 1.77h13.71c0.89 0 1.44-0.990.98-1.77zM8 5c0.54 0 0.950.460.91l-0.35 3.51a0.550.55 0 0 1-1.1 0L7.1 6A0.910.91 0 0 1 8 5m0 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsExclamationTriangleFill;
