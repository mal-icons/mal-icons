import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-bar-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowBarRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M6 8a0.50.5 0 0 0 0.50.5h5.79l-2.15 2.15a0.50.5 0 0 0 0.710.71l3-3a0.50.5 0 0 0 0-0.71l-3-3a0.50.5 0 0 0-0.710.71L12.29 7.5H6.5A0.50.5 0 0 0 6 8m-2.5 7a0.50.5 0 0 1-0.5-0.5v-13a0.50.5 0 0 1 1 0v13a0.50.5 0 0 1-0.50.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowBarRight;
