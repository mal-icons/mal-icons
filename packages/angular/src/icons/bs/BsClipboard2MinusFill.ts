import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-clipboard2-minus-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsClipboard2MinusFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 0.5a0.50.5 0 0 0-0.5-0.5h-3a0.50.5 0 0 0-0.50.50.50.5 0 0 1-0.50.50.50.5 0 0 0-0.50.5V2a0.50.5 0 0 0 0.50.5h5A0.50.5 0 0 0 11 2v-0.5a0.50.5 0 0 0-0.5-0.50.50.5 0 0 1-0.5-0.5"}],["path",{"d":"M4.09 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-0.58q0.080.240.090.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-0.5q0-0.260.09-0.5M6 8h4a0.50.5 0 0 1 0 1H6a0.50.5 0 0 1 0-1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsClipboard2MinusFill;
