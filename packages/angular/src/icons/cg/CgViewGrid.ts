import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-view-grid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgViewGrid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5 5C3.34 5 2 6.34 2 8V16C2 17.66 3.34 19 5 19H19C20.66 19 22 17.66 22 16V8C22 6.34 20.66 5 19 5H5ZM8 7H5C4.45 7 4 7.45 4 8V9H8V7ZM10 7V9H14V7H10ZM16 7V9H20V8C20 7.45 19.55 7 19 7H16ZM14 11H10V13H14V11ZM16 13V11H20V13H16ZM14 15H10V17H14V15ZM16 17V15H20V16C20 16.55 19.55 17 19 17H16ZM8 17V15H4V16C4 16.55 4.45 17 5 17H8ZM8 13V11H4V13H8Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgViewGrid;
