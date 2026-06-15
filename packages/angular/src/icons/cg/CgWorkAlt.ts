import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-work-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgWorkAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17 7C17 5.34 15.66 4 14 4H10C8.34 4 7 5.34 7 7H6C4.34 7 3 8.34 3 10V18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V10C21 8.34 19.66 7 18 7H17ZM14 6H10C9.45 6 9 6.45 9 7H15C15 6.45 14.55 6 14 6ZM6 9H18C18.55 9 19 9.45 19 10V18C19 18.55 18.55 19 18 19H6C5.45 19 5 18.55 5 18V10C5 9.45 5.45 9 6 9Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgWorkAlt;
