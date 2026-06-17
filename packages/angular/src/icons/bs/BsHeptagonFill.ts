import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-heptagon-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHeptagonFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M7.780.05a0.50.5 0 0 1 0.44 0l6.02 2.97a0.50.5 0 0 1 0.270.34l1.49 6.68a0.50.5 0 0 1-0.090.42l-4.16 5.35a0.50.5 0 0 1-0.390.19H4.66a0.50.5 0 0 1-0.39-0.19L0.11 10.45a0.50.5 0 0 1-0.09-0.41l1.49-6.68a0.50.5 0 0 1 0.27-0.34z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHeptagonFill;
