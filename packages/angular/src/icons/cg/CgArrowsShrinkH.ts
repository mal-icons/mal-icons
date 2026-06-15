import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-arrows-shrink-h",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgArrowsShrinkH {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 7H3V17H1V7Z","fill":"currentColor"}],["path",{"d":"M8.45 7.76L9.86 9.17L8.03 11H15.97L14.14 9.17L15.55 7.76L19.79 12L15.55 16.24L14.14 14.83L15.97 13H8.03L9.86 14.83L8.45 16.24L4.21 12L8.45 7.76Z","fill":"currentColor"}],["path",{"d":"M23 7H21V17H23V7Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgArrowsShrinkH;
