import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-box-arrow-in-down-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBoxArrowInDownRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M6.36 2.5a0.50.5 0 0 1 0.5-0.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.86a0.50.5 0 1 1 1 0V13.5a0.50.5 0 0 0 0.50.5h10a0.50.5 0 0 0 0.5-0.5v-10a0.50.5 0 0 0-0.5-0.5H6.86a0.50.5 0 0 1-0.5-0.5"}],["path",{"fill-rule":"evenodd","d":"M11 10.5a0.50.5 0 0 1-0.50.5h-5a0.50.5 0 0 1 0-1h3.79L1.15 1.85a0.50.5 0 1 1 0.71-0.71L10 9.29V5.5a0.50.5 0 0 1 1 0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBoxArrowInDownRight;
