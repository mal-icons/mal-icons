import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrow-align-h",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowAlignH {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 7H11V17H13V7Z","fill":"currentColor"}],["path",{"d":"M6 7.76L7.41 9.17L5.59 11L10 11V13L5.59 13L7.41 14.83L6 16.24L1.76 12L6 7.76Z","fill":"currentColor"}],["path",{"d":"M18 16.24L16.59 14.83L18.41 13H14V11L18.41 11L16.59 9.17L18 7.76L22.24 12L18 16.24Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowAlignH;
