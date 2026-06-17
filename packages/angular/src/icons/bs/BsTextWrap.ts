import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-text-wrap",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTextWrap {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M2 3.5a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1-0.5-0.5m0 4a0.50.5 0 0 1 0.5-0.5h9a2.5 2.5 0 0 1 0 5h-1.29l0.650.65a0.50.5 0 0 1-0.710.71l-1.5-1.5a0.50.5 0 0 1 0-0.71l1.5-1.5a0.50.5 0 0 1 0.710.71l-0.650.65H11.5a1.5 1.5 0 0 0 0-3h-9a0.50.5 0 0 1-0.5-0.5m0 4a0.50.5 0 0 1 0.5-0.5H7a0.50.5 0 0 1 0 1H2.5a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTextWrap;
