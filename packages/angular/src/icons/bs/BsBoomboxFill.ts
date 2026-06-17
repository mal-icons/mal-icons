import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-boombox-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsBoomboxFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 0a0.50.5 0 0 1 0.50.5V2h0.5a1 1 0 0 1 1 1v2H0V3a1 1 0 0 1 1-1h12.5V0.5A0.50.5 0 0 1 14 0M2 3.5a0.50.5 0 1 0 1 0 0.50.5 0 0 0-1 0m2 0a0.50.5 0 1 0 1 0 0.50.5 0 0 0-1 0m7.50.5a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1m1.5-0.5a0.50.5 0 1 0 1 0 0.50.5 0 0 0-1 0M9.5 3h-3a0.50.5 0 0 0 0 1h3a0.50.5 0 0 0 0-1M6 10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.50.5a0.50.5 0 1 0 0-1 0.50.5 0 0 0 0 1m7 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0.5-1.5a0.50.5 0 1 1-1 0 0.50.5 0 0 1 1 0"}],["path",{"d":"M0 6h16v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2 4.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m7 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsBoomboxFill;
