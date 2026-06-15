import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-view-cols",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgViewCols {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 8C2 6.34 3.34 5 5 5H19C20.66 5 22 6.34 22 8V16C22 17.66 20.66 19 19 19H5C3.34 19 2 17.66 2 16V8ZM16 7H19C19.55 7 20 7.45 20 8V16C20 16.55 19.55 17 19 17H16V7ZM14 7H10V17H14V7ZM8 17V7H5C4.45 7 4 7.45 4 8V16C4 16.55 4.45 17 5 17H8Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgViewCols;
