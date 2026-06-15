import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-chevron-left-r",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgChevronLeftR {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 7.76L14.41 9.17L11.59 12L14.41 14.83L13 16.24L8.76 12L13 7.76Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M19 1C21.21 1 23 2.79 23 5V19C23 21.21 21.21 23 19 23H5C2.79 23 1 21.21 1 19V5C1 2.79 2.79 1 5 1H19ZM21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19L3 5C3 3.9 3.9 3 5 3L19 3C20.1 3 21 3.9 21 5Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgChevronLeftR;
