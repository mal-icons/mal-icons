import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-unknown-5",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssUnknown5 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M160-488v-60h314v60H160ZM480-80q-80 0-155.5-29.5T195-196l41-41q52 48 112 72.5T480-140q149 0 244.5-95.5T820-480q0-149-95.5-244.5T480-820v-60q85 0 158 30.5T765-765q54 54 84.5 127T880-480q0 85-30.5 158T765-195q-54 54-127 84.5T480-80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssUnknown5;
