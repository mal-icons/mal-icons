import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-trophy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgTrophy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M13 15.9C15.28 15.44 17 13.42 17 11V4H7V11C7 13.42 8.72 15.44 11 15.9V18H9V20H15V18H13V15.9ZM9 6H15V11C15 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V6Z","fill":"currentColor"}],["path",{"d":"M18 6H20V11H18V6Z","fill":"currentColor"}],["path",{"d":"M6 6H4V11H6V6Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgTrophy;
