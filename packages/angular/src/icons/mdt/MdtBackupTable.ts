import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-backup-table",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBackupTable {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 11h5v5h-5zm-7 0h5v5H4zm0-7h12v5H4z","opacity":".3"}],["path",{"d":"M20 6v14H6v2h14c1.1 0 2-0.9 2-2V6h-2z"}],["path",{"d":"M18 16V4c0-1.1-0.9-2-2-2H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2zM4 4h12v5H4V4zm5 12H4v-5h5v5zm2-5h5v5h-5v-5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBackupTable;
