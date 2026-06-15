import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-credit-card",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrCreditCard {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M1,5 C1,4.45 1.44,4 2,4 L22,4 C22.55,4 23,4.44 23,5 L23,19 C23,19.55 22.56,20 22,20 L2,20 C1.45,20 1,19.56 1,19 L1,5 Z M1,8 L23,8 L23,10 L1,10 L1,8 Z M5,15 L7,15 L7,15.5 L5,15.5 L5,15 Z M10,15 L16,15 L16,15.5 L10,15.5 L10,15 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrCreditCard;
