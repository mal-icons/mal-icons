import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-currency-btc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhCurrencyBtc {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M170.48,115.7A44,44,0,0,0,144,40.19V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64a8,8,0,0,0,0,16h8V192H64a8,8,0,0,0,0,16H96v16a8,8,0,0,0,16,0V208h16v16a8,8,0,0,0,16,0V208h8a48,48,0,0,0,18.48-92.3ZM168,84a28,28,0,0,1-28,28H88V56h52A28,28,0,0,1,168,84ZM152,192H88V128h64a32,32,0,0,1,0,64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhCurrencyBtc;
