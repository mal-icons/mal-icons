import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-text-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsTextRight {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M6 12.5a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1-0.5-0.5m-4-3a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1-0.5-0.5m4-3a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1-0.5-0.5m-4-3a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1-0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsTextRight;
