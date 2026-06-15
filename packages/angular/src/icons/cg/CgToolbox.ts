import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-toolbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgToolbox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17 5.5H20C21.1 5.5 22 6.4 22 7.5V19.5C22 20.6 21.1 21.5 20 21.5H4C2.9 21.5 2 20.6 2 19.5V7.5C2 6.4 2.9 5.5 4 5.5H7C7 3.84 8.34 2.5 10 2.5H14C15.66 2.5 17 3.84 17 5.5ZM14 4.5H10C9.45 4.5 9 4.95 9 5.5H15C15 4.95 14.55 4.5 14 4.5ZM20 7.5H4V9.5H20V7.5ZM4 19.5V11.5H7V13.5H11V11.5H13V13.5H17V11.5H20V19.5H4Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgToolbox;
