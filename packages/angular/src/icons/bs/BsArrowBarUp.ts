import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-bar-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowBarUp {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8 10a0.50.5 0 0 0 0.5-0.5V3.71l2.15 2.15a0.50.5 0 0 0 0.71-0.71l-3-3a0.50.5 0 0 0-0.71 0l-3 3a0.50.5 0 1 0 0.710.71L7.5 3.71V9.5a0.50.5 0 0 0 0.50.5m-7 2.5a0.50.5 0 0 1 0.5-0.5h13a0.50.5 0 0 1 0 1h-13a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowBarUp;
