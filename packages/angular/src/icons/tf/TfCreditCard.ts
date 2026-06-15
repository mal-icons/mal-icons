import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-credit-card",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfCreditCard {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15.5 2h-14c-0.83 0-1.5 0.67-1.5 1.5v10c0 0.83 0.67 1.5 1.5 1.5h14c0.83 0 1.5-0.67 1.5-1.5v-10c0-0.83-0.67-1.5-1.5-1.5zM16 13.5c0 0.28-0.22 0.5-0.5 0.5h-14c-0.28 0-0.5-0.22-0.5-0.5v-5.5h15v5.5zM1 5v-1.5c0-0.28 0.22-0.5 0.5-0.5h14c0.28 0 0.5 0.23 0.5 0.5v1.5h-15z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfCreditCard;
