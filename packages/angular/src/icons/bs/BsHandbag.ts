import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-handbag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHandbag {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.48 1.28L0.85 13.13A2.5 2.5 0 0 0 3.32 16h9.36a2.5 2.5 0 0 0 2.47-2.87l-1.03-6.85A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a0.50.5 0 0 0 1 0V6h1.64a0.50.5 0 0 1 0.490.43l1.03 6.85A1.5 1.5 0 0 1 12.68 15H3.32a1.5 1.5 0 0 1-1.48-1.72l1.03-6.85A0.50.5 0 0 1 3.36 6H5v1.5a0.50.5 0 1 0 1 0V6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHandbag;
