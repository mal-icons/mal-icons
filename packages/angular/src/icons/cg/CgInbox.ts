import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-inbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgInbox {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 5C2 3.34 3.34 2 5 2H19C20.66 2 22 3.34 22 5V20C22 21.1 21.1 22 20 22H8.15C8.1 22 8.05 22.01 8 22.01H4C2.9 22.01 2 21.11 2 20.01V5ZM5 4H19C19.55 4 20 4.45 20 5V14H16C14.9 14 14 14.9 14 16V17H10V16.01C10 14.9 9.1 14.01 8 14.01H4V5C4 4.45 4.45 4 5 4Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgInbox;
