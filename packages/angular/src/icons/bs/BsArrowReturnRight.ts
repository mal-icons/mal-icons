import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-arrow-return-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsArrowReturnRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M1.5 1.5A0.50.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.79l-3.35 3.35a0.50.5 0 0 0 0.710.71l4.2-4.2a0.50.5 0 0 0 0-0.71l-4-4a0.50.5 0 0 0-0.710.71L13.29 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a0.50.5 0 0 0-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsArrowReturnRight;
