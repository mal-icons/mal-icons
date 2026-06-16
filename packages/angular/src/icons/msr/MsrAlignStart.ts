import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-align-start",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAlignStart {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M110-820q-12.75 0-21.37-8.68Q80-837.35 80-850.17 80-863 88.63-871.5T110-880h740q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T850-820H110Zm210 250q-12.75 0-21.37-8.62T290-600v-40q0-12.75 8.63-21.37T320-670h320q12.75 0 21.38 8.63T670-640v40q0 12.75-8.62 21.38T640-570H320Zm0 240q-12.75 0-21.37-8.62T290-360v-40q0-12.75 8.63-21.37T320-430h320q12.75 0 21.38 8.63T670-400v40q0 12.75-8.62 21.38T640-330H320Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAlignStart;
