import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-hdd-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHddFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2.5 1a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1m2 0a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1M0.91 7.2A3 3 0 0 1 2 7h12c0.38 0 0.750.07 1.090.2l-1.87-3.42A1.5 1.5 0 0 0 11.91 3H4.09a1.5 1.5 0 0 0-1.320.78z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHddFill;
