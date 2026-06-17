import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-capsule-pill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsCapsulePill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.02 5.36a3 3 0 0 0-4.24-4.24L1.12 6.78a3 3 0 1 0 4.24 4.24l5.66-5.66Zm-6.41-0.66 2.88-2.88a2 2 0 1 1 2.83 2.83L7.44 7.54zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-0.5 1.04a3 3 0 0 0 0 5.92zm1 5.92a3 3 0 0 0 0-5.92z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsCapsulePill;
