import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-auto-delete",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoAutoDelete {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M261-750v570-570Zm187 630H261q-24 0-42-18t-18-42v-570h-43v-60h189v-30h248v30h189v60h-43v191q-14-4-30-7t-30-4v-180H261v570h157q4 11 13 29t17 31Zm-88-146h30q0-78 15-115l15-37v-247h-60v399Zm163-262q12-8 29-15.5t31-12.5v-109h-60v137ZM667.99-79Q580-79 518.5-141.01q-61.5-62.01-61.5-150Q457-379 518.72-440.5 580.43-502 668-502q87.98 0 149.99 61.72Q880-378.56 880-291q0 87.98-62.01 149.99Q755.97-79 667.99-79ZM733-196l28-28-74-74v-112h-40v128l86 86Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoAutoDelete;
