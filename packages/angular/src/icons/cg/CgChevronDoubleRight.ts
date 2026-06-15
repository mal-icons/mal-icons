import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-chevron-double-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgChevronDoubleRight {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.64 7.76L7.05 6.34L12.71 12L7.05 17.66L5.64 16.24L9.88 12L5.64 7.76Z","fill":"currentColor"}],["path",{"d":"M12.71 6.34L11.29 7.76L15.54 12L11.29 16.24L12.71 17.66L18.36 12L12.71 6.34Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgChevronDoubleRight;
