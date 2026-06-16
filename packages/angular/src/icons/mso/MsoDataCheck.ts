import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-data-check",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDataCheck {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m612-550 141-142-28-28-113 113-57-57-28 29 85 85ZM120-160v-60h480v60H120Zm519.89-290Q561-450 505.5-505.61t-55.5-134.5Q450-719 505.61-774.5t134.5-55.5Q719-830 774.5-774.39t55.5 134.5Q830-561 774.39-505.5t-134.5 55.5ZM120-500v-60h262q5.32 16.32 12.16 31.16Q401-514 409-500H120Zm0 170v-60h419q13.8 6.36 29.4 10.68Q584-375 600-373v43H120Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDataCheck;
