import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-settings-backup-restore",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfSettingsBackupRestore {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 12c0-1.1-0.9-2-2-2s-2 0.9-2 2 0.9 2 2 2 2-0.9 2-2zm-2-9a9 9 0 0 0-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7a7 7 0 0 1-11.06 5.7l-1.42 1.44A9 9 0 1 0 12 3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfSettingsBackupRestore;
