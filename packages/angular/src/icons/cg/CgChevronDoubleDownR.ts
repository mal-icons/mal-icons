import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-chevron-double-down-r",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgChevronDoubleDownR {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.76 8.46L9.17 7.05L12 9.88L14.83 7.05L16.24 8.46L12 12.71L7.76 8.46Z","fill":"currentColor"}],["path",{"d":"M9.17 11.29L7.76 12.71L12 16.95L16.24 12.71L14.83 11.29L12 14.12L9.17 11.29Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 5C1 2.79 2.79 1 5 1H19C21.21 1 23 2.79 23 5V19C23 21.21 21.21 23 19 23H5C2.79 23 1 21.21 1 19V5ZM5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgChevronDoubleDownR;
