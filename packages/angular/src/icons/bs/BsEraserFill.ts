import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-eraser-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEraserFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.09 2.21a2 2 0 0 1 2.83 0l3.88 3.88a2 2 0 0 1 0 2.83l-5.5 5.5A2 2 0 0 1 7.88 15H5.12a2 2 0 0 1-1.41-0.59l-2.5-2.5a2 2 0 0 1 0-2.83zm0.66 11.34L3.45 8.25 1.91 9.79a1 1 0 0 0 0 1.41l2.5 2.5a1 1 0 0 0 0.710.29H7.88a1 1 0 0 0 0.71-0.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEraserFill;
