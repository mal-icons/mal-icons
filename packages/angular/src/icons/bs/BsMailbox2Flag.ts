import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-mailbox2-flag",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsMailbox2Flag {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.5 8.5V3.71l0.85-0.85A0.50.5 0 0 0 11.5 2.5v-2A0.50.5 0 0 0 11 0H9.5a0.50.5 0 0 0-0.50.5v8z"}],["path",{"d":"M4 3h4v1H6.65A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m0.59 4.16C4.84 7.26 5 7.33 5 7a1 1 0 0 0-2 0c0 0.330.160.260.420.16C3.58 7.09 3.78 7 4 7s0.420.090.590.16"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsMailbox2Flag;
