import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bx-label",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BxLabel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16.81 4.42A11 0 0 0 16 4H3a1 1 0 0 0-0.81 1.58L6.77 12l-4.58 6.42A1 1 0 0 0 3 20h13a11 0 0 0 0.81-0.42l5-7a11 0 0 0 0-1.16l-5-7zM15.49 18H4.94l3.87-5.42a11 0 0 0 0-1.16L4.94 6h10.54l4.29 6-4.29 6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BxLabel;
