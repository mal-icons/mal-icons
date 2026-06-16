import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-folder-delete",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfFolderDelete {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22 8v10c0 1.1-0.9 2-2 2H4c-1.1 0-2-0.9-2-2l0.01-12c0-1.10.89-2 1.99-2h6l2 2h8c1.1 0 2 0.9 2 2zm-5.5 2V9h-2v1H12v1.5h1v4c0 0.830.67 1.5 1.5 1.5h2c0.83 0 1.5-0.67 1.5-1.5v-4h1V10h-2.5zm0 5.5h-2v-4h2v4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfFolderDelete;
