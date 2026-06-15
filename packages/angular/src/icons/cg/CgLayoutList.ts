import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-layout-list",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgLayoutList {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 7H7V9H9V7Z","fill":"currentColor"}],["path",{"d":"M7 13V11H9V13H7Z","fill":"currentColor"}],["path",{"d":"M7 15V17H9V15H7Z","fill":"currentColor"}],["path",{"d":"M11 15V17H17V15H11Z","fill":"currentColor"}],["path",{"d":"M17 13V11H11V13H17Z","fill":"currentColor"}],["path",{"d":"M17 7V9H11V7H17Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgLayoutList;
