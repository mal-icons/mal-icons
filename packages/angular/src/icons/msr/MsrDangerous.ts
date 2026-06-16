import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-dangerous",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrDangerous {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M355-120q-12 0-23.5-5T312-138L138-312q-8-8-13-19.5t-5-23.5v-250q0-12 5-23.5t13-19.5l174-174q8-8 19.5-13t23.5-5h250q12 0 23.5 5t19.5 13l174 174q8 8 13 19.5t5 23.5v250q0 12-5 23.5T822-312L648-138q-8 8-19.5 13t-23.5 5H355Zm0-60h250l175-175v-250L605-780H355L180-605v250l175 175Zm125-258 102 102q9 9 21 9t21-9q9-9 9-21t-9-21L522-480l102-102q9-9 9-21t-9-21q-9-9-21-9t-21 9L480-522 378-624q-9-9-21-9t-21 9q-9 9-9 21t9 21l102 102-102 102q-9 9-9 21t9 21q9 9 21 9t21-9l102-102Zm0-42Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrDangerous;
