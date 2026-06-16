import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-contract-delete",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoContractDelete {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m762-191-85 85-42-42 85-85-85-85 42-42 85 85 85-85 42 42-85 85 85 85-42 42-85-85ZM225-80q-44 0-74.5-30.5T120-185v-135h120v-560h600v446q-14-5-29-8t-31-5v-373H300v500h266q-6 14-10 29t-6 31H180v75q0 19 13 32t31 13h345q8 17 19 32t24 28H225Zm135-560v-60h360v60H360Zm0 120v-60h360v60H360Zm209 380H180h370-2 21Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoContractDelete;
