import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-chevron-left",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsChevronLeft {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M11.35 1.65a0.50.5 0 0 1 0 0.71L5.71 8l5.65 5.65a0.50.5 0 0 1-0.710.71l-6-6a0.50.5 0 0 1 0-0.71l6-6a0.50.5 0 0 1 0.71 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsChevronLeft;
