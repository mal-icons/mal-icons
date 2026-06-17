import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-chevron-bar-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsChevronBarRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M4.15 3.65a0.50.5 0 0 0 0 0.71L7.79 8l-3.65 3.65a0.50.5 0 0 0 0.710.71l4-4a0.50.5 0 0 0 0-0.71l-4-4a0.50.5 0 0 0-0.71 0M11.5 1a0.50.5 0 0 1 0.50.5v13a0.50.5 0 0 1-1 0v-13a0.50.5 0 0 1 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsChevronBarRight;
