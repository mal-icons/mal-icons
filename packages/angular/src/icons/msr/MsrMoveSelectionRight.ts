import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-move-selection-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrMoveSelectionRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M400-660q0-24.75 17.63-42.37T460-720h360q24.75 0 42.38 17.63T880-660v360q0 24.75-17.62 42.38T820-240H460q-24.75 0-42.37-17.62T400-300v-360Zm60 0v360h360v-360H460ZM240-240v-60h60v60h-60Zm0-420v-60h60v60h-60ZM80-450v-60h60v60H80Zm560-30ZM80-300h60v60q-24 0-42-18t-18-42Zm0-360q0-24 18-42t42-18v60H80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrMoveSelectionRight;
