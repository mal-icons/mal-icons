import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-wifi",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoWifi {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m232-357-63-63q70-70 146.5-105T480-560q88 0 164.5 35T791-420l-63 63q-61-61-123-87t-125-26q-63 0-125 26t-123 87ZM63-526 0-589q93-95 216.5-153T480-800q140 0 263.5 58T960-589l-63 63q-88-84-192.5-134T480-710q-120 0-224.5 50T63-526Zm417 417 148-149q-29-29-66.5-45.5T480-320q-44 0-81.5 16.5T332-258l148 149Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoWifi;
