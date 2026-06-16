import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-settings-cell",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdSettingsCell {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 0.01 8 0C6.9 0 6 0.9 6 2v16c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V2c0-1.1-0.9-1.99-2-1.99zM16 18H8v-1h8v1zm0-3H8V5h8v10zm0-12H8V2h8v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdSettingsCell;
