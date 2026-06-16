import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-folder-copy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdFolderCopy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 19h17v2H3c-1.1 0-2-0.9-2-2V6h2v13zM23 6v9c0 1.1-0.9 2-2 2H7c-1.1 0-2-0.9-2-2l0.01-11c0-1.10.89-2 1.99-2h5l2 2h7c1.1 0 2 0.9 2 2zM7 15h14V6h-7.83l-2-2H7v11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdFolderCopy;
