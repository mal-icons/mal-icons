import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-easel2-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsEasel2Fill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.450.28a0.50.5 0 0 0-0.89 0L7.19 1H2.5A1.5 1.5 0 0 0 1 2.5V10h14V2.5A1.5 1.5 0 0 0 13.5 1H8.81z"}],["path",{"fill-rule":"evenodd","d":"M0.5 11a0.50.5 0 0 0 0 1h2.86l-0.84 3.38a0.50.5 0 0 0 0.970.24L3.89 14h8.22l0.41 1.62a0.50.5 0 0 0 0.97-0.24L12.64 12h2.86a0.50.5 0 0 0 0-1zm3.64 2 0.25-1h7.22l0.25 1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsEasel2Fill;
