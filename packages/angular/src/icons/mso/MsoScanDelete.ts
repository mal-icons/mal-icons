import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-scan-delete",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoScanDelete {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-820v186-186 680-11.5 11.5-680Zm0 740q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v227q-14-6-29-9.5t-31-5.5v-185H551v-186H220v680h316q10 17 22 32t27 28H220Zm416-34-42-42 84-84-84-84 42-42 84 84 84-84 42 42-83 84 83 84-42 42-84-83-84 83Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoScanDelete;
