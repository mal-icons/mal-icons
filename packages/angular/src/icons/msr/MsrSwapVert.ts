import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-swap-vert",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSwapVert {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M576-196v-286q0-13 8.5-21.5T606-512q13 0 21.5 8.5T636-482v287l102-101q8-8 20-8t21 9q9 9 9 21t-9 21L628-102q-5 5-10.5 7T607-93q-6 0-11.5-2t-9.5-7L434-255q-8-8-8-20t9-21q8-9 20.5-8.5T477-295l99 99ZM322-766 222-666q-8 8-20 8t-21-9q-9-9-9-21t9-21l151-151q5-5 10-7t11-2q6 0 11 2t10 7l152 152q8 8 8 20t-9 21q-9 9-21 9t-21-9L382-767v287q0 13-8.5 21.5T352-450q-13 0-21.5-8.5T322-480v-286Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSwapVert;
