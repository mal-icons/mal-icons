import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-luggage-deposit-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiLuggageDepositLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 3C15.55 3 16 3.45 16 4V6H20C20.55 6 21 6.45 21 7V19H23V21H1V19H3V7C3 6.45 3.45 6 4 6H8V4C8 3.45 8.45 3 9 3H15ZM8 8H5V19H8V8ZM14 8H10V19H14V8ZM19 8H16V19H19V8ZM14 5H10V6H14V5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiLuggageDepositLine;
