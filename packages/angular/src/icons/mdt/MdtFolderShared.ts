import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-folder-shared",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFolderShared {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m11.17 8-0.59-0.59L9.17 6H4v12h16V8h-8.83zM19 16v1h-8v-1c0-1.33 2.67-2 4-2s4 0.67 4 2zm-4-7c1.1 0 2 0.9 2 2s-0.9 2-2 2-2-0.9-2-2 0.9-2 2-2z","opacity":".3"}],["path",{"d":"M20 6h-8l-2-2H4c-1.1 0-1.990.9-1.99 2L2 18c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V8c0-1.1-0.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-5-5c1.1 0 2-0.9 2-2s-0.9-2-2-2-2 0.9-2 2 0.9 2 2 2zm-4 3v1h8v-1c0-1.33-2.67-2-4-2s-4 0.67-4 2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFolderShared;
