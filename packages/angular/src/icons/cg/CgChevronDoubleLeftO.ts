import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-cg-chevron-double-left-o",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class CgChevronDoubleLeftO {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.71 9.17L11.29 7.76L7.05 12L11.29 16.24L12.71 14.83L9.88 12L12.71 9.17Z","fill":"currentColor"}],["path",{"d":"M15.54 7.76L16.95 9.17L14.12 12L16.95 14.83L15.54 16.24L11.29 12L15.54 7.76Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M23 12C23 18.08 18.08 23 12 23C5.92 23 1 18.08 1 12C1 5.92 5.92 1 12 1C18.08 1 23 5.92 23 12ZM21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default CgChevronDoubleLeftO;
