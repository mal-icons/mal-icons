import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-door-open",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsDoorOpen {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8.5 10c-0.28 0-0.5-0.45-0.5-1s0.22-1 0.5-1 0.50.450.5 1-0.22 1-0.5 1"}],["path",{"d":"M10.830.12A0.50.5 0 0 1 11 0.5V1h0.5A1.5 1.5 0 0 1 13 2.5V15h1.5a0.50.5 0 0 1 0 1h-13a0.50.5 0 0 1 0-1H3V1.5a0.50.5 0 0 1 0.43-0.49l7-1a0.50.5 0 0 1 0.40.12M11.5 2H11v13h1V2.5a0.50.5 0 0 0-0.5-0.5M4 1.93V15h6V1.08z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsDoorOpen;
