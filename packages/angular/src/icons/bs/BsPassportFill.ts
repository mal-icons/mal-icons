import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-passport-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsPassportFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4"}],["path",{"d":"M2 3.25a1.5 1.5 0 0 1 1.23-1.48l8-1.45A1.5 1.5 0 0 1 13 1.8v0.47A2 2 0 0 1 14 4v10a2 2 0 0 1-2 2H4a2 2 0 0 1-1.51-0.69 1.5 1.5 0 0 1-0.49-1.11V3.25ZM5 8a3 3 0 1 0 6 0 3 3 0 0 0-6 0m0 4.5a0.50.5 0 0 0 0.50.5h5a0.50.5 0 0 0 0-1h-5a0.50.5 0 0 0-0.50.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsPassportFill;
