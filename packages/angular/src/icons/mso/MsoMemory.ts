import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-memory",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoMemory {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M377-377v-205h205v205H377Zm60-60h85v-85h-85v85Zm-77 317v-80H260q-24 0-42-18t-18-42v-100h-80v-60h80v-124h-80v-60h80v-100q0-24 18-42t42-18h100v-76h60v76h124v-76h60v76h100q24 0 42 18t18 42v100h76v60h-76v124h76v60h-76v100q0 24-18 42t-42 18H604v80h-60v-80H420v80h-60Zm344-140v-444H260v444h444ZM480-480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoMemory;
