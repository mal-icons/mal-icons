import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-move-selection-up",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMoveSelectionUp {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M300-400q-24.75 0-42.37-17.62T240-460v-360q0-24.75 17.63-42.37T300-880h360q24.75 0 42.38 17.63T720-820v360q0 24.75-17.62 42.38T660-400H300Zm0-60h360v-360H300v360Zm360 220v-60h60v60h-60Zm-420 0v-60h60v60h-60ZM450-80v-60h60v60h-60Zm30-560ZM660-80v-60h60q0 24-18 42t-42 18Zm-360 0q-24 0-42-18t-18-42h60v60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMoveSelectionUp;
