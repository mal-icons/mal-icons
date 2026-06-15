import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-display-grid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgDisplayGrid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 7V11H11V7H7Z","fill":"currentColor"}],["path",{"d":"M13 7H17V11H13V7Z","fill":"currentColor"}],["path",{"d":"M13 13V17H17V13H13Z","fill":"currentColor"}],["path",{"d":"M7 13H11V17H7V13Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 3H21V21H3V3ZM5 5V19H19V5H5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgDisplayGrid;
