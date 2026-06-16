import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-confirmation-number",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtConfirmationNumber {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.01 8.54C5.2 9.23 6 10.52 6 12s-0.81 2.77-2 3.46V18h16v-2.54c-1.19-0.69-2-1.99-2-3.46s0.81-2.77 2-3.46V6H4l0.01 2.54zM11 7h2v2h-2V7zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z","opacity":".3"}],["path",{"d":"M22 10V6a2 2 0 0 0-2-2H4c-1.1 0-1.990.89-1.99 2v4c1.1 0 1.990.9 1.99 2s-0.89 2-2 2v4c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2v-4c-1.1 0-2-0.9-2-2s0.9-2 2-2zm-2-1.46c-1.190.69-2 1.99-2 3.46s0.81 2.77 2 3.46V18H4v-2.54c1.19-0.69 2-1.99 2-3.46 0-1.48-0.8-2.77-1.99-3.46L4 6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtConfirmationNumber;
