import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-moving",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMoving {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M101-261q-9-9-9-21t9-21l198-198q32-32 78-32t78 32l46 46q15 15 35.5 15t35.5-15l205-205h-87q-13 0-21.5-8.5T660-690q0-13 8.5-21.5T690-720h160q13 0 21.5 8.5T880-690v160q0 13-8.5 21.5T850-500q-13 0-21.5-8.5T820-530v-87L614-412q-32 32-78 32t-78-32l-47-47q-14-14-35-14t-35 14L143-261q-9 9-21 9t-21-9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMoving;
