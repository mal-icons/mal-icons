import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-symmetry-horizontal",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSymmetryHorizontal {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.5 7a0.50.5 0 0 0 0.24-0.94l-11-6A0.50.5 0 0 0 2 0.5v6a0.50.5 0 0 0 0.50.5zm0.49 2.38a0.50.5 0 0 1-0.250.56l-11 6A0.50.5 0 0 1 2 15.5v-6a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0.490.38M11.54 10H3v4.66z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSymmetryHorizontal;
