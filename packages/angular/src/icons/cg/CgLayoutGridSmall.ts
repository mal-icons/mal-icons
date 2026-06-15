import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-layout-grid-small",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgLayoutGridSmall {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 7H9V9H7V7Z","fill":"currentColor"}],["path",{"d":"M11 7H13V9H11V7Z","fill":"currentColor"}],["path",{"d":"M17 7H15V9H17V7Z","fill":"currentColor"}],["path",{"d":"M7 11H9V13H7V11Z","fill":"currentColor"}],["path",{"d":"M13 11H11V13H13V11Z","fill":"currentColor"}],["path",{"d":"M15 11H17V13H15V11Z","fill":"currentColor"}],["path",{"d":"M9 15H7V17H9V15Z","fill":"currentColor"}],["path",{"d":"M11 15H13V17H11V15Z","fill":"currentColor"}],["path",{"d":"M17 15H15V17H17V15Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgLayoutGridSmall;
