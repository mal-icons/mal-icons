import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-chevron-double-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsChevronDoubleRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M3.65 1.65a0.50.5 0 0 1 0.71 0l6 6a0.50.5 0 0 1 0 0.71l-6 6a0.50.5 0 0 1-0.71-0.71L9.29 8 3.65 2.35a0.50.5 0 0 1 0-0.71"}],["path",{"fill-rule":"evenodd","d":"M7.65 1.65a0.50.5 0 0 1 0.71 0l6 6a0.50.5 0 0 1 0 0.71l-6 6a0.50.5 0 0 1-0.71-0.71L13.29 8 7.65 2.35a0.50.5 0 0 1 0-0.71"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsChevronDoubleRight;
