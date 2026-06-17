import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-door-open-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDoorOpenFill {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.5 15a0.50.5 0 0 0 0 1h13a0.50.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V0.5a0.50.5 0 0 0-0.57-0.49l-7 1A0.50.5 0 0 0 3 1.5V15zM11 2h0.5a0.50.5 0 0 1 0.50.5V15h-1zm-2.5 8c-0.28 0-0.5-0.45-0.5-1s0.22-1 0.5-1 0.50.450.5 1-0.22 1-0.5 1"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDoorOpenFill;
