import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-suitcase-3-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiSuitcase3Fill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 1C15.55 1 16 1.45 16 2V7H17V6H19V7H20C20.55 7 21 7.45 21 8V20C21 20.55 20.55 21 20 21H19V22H17V21H7V22H5V21H4C3.45 21 3 20.55 3 20V8C3 7.45 3.45 7 4 7H5V6H7V7H8V2C8 1.45 8.45 1 9 1H15ZM9 10H7V18H9V10ZM13 10H11V18H13V10ZM17 10H15V18H17V10ZM14 3H10V7H14V3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiSuitcase3Fill;
