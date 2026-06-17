import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-down-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowDownCircle {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a0.50.5 0 0 0-1 0v5.79L5.35 8.15a0.50.5 0 1 0-0.710.71l3 3a0.50.5 0 0 0 0.71 0l3-3a0.50.5 0 0 0-0.71-0.71L8.5 10.29z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowDownCircle;
