import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-shape-zigzag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgShapeZigzag {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.31 9L1 10.51L4.77 13.79L6.28 15.1L7.6 13.59L9.13 11.82L11.4 13.79L12.91 15.1L14.22 13.59L15.76 11.82L18.02 13.79L19.53 15.1L20.84 13.59L22.81 11.33L21.3 10.02L19.33 12.28L15.56 9L14.25 10.51L14.25 10.51L12.71 12.28L8.94 9L8.05 10.02L6.09 12.28L2.31 9Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgShapeZigzag;
