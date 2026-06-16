import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-move-selection-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMoveSelectionDown {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M300-80q-24.75 0-42.37-17.62T240-140v-360q0-24.75 17.63-42.37T300-560h360q24.75 0 42.38 17.63T720-500v360q0 24.75-17.62 42.38T660-80H300Zm360-420H300v360h360v-360ZM240-660v-60h60v60h-60Zm420 0v-60h60v60h-60ZM450-820v-60h60v60h-60Zm30 500ZM240-820q0-24 18-42t42-18v60h-60Zm420 0v-60q24 0 42 18t18 42h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMoveSelectionDown;
