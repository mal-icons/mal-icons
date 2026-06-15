import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-sl-credit-card",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SlCreditCard {
  readonly viewBox = "0 0 1024 1024";
  readonly nodes: NodeTuple[] = [["path",{"d":"M928.14 176H95.86c-53.02 0-96 42.98-96 96v480c0 53.02 42.98 96 96 96h832.29c53.02 0 96-42.98 96-96V272c0-53.02-42.98-96-96-96zM95.86 240h832.29c17.66 0 32 14.34 32 32v64H63.86v-64c0-17.66 14.35-32 32-32zm832.29 544H95.86c-17.66 0-32-14.34-32-32V464h896.29v288c0 17.66-14.35 32-32 32z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SlCreditCard;
