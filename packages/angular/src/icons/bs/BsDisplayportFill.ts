import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-displayport-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDisplayportFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1 5a1 1 0 0 0-1 1v3.19a1 1 0 0 0 0.550.89l1.620.81a1 1 0 0 0 0.450.11H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm1.5 2h11a0.50.5 0 0 1 0.50.5v1a0.50.5 0 0 1-1 0V8H3v0.5a0.50.5 0 0 1-1 0v-1a0.50.5 0 0 1 0.5-0.5"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDisplayportFill;
