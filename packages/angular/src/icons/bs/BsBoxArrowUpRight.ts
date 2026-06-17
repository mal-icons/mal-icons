import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-box-arrow-up-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBoxArrowUpRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8.64 3.5a0.50.5 0 0 0-0.5-0.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.86a0.50.5 0 0 0-1 0V14.5a0.50.5 0 0 1-0.50.5h-10a0.50.5 0 0 1-0.5-0.5v-10a0.50.5 0 0 1 0.5-0.5h6.64a0.50.5 0 0 0 0.5-0.5"}],["path",{"fill-rule":"evenodd","d":"M16 0.5a0.50.5 0 0 0-0.5-0.5h-5a0.50.5 0 0 0 0 1h3.79L6.15 9.15a0.50.5 0 1 0 0.710.71L15 1.71V5.5a0.50.5 0 0 0 1 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBoxArrowUpRight;
