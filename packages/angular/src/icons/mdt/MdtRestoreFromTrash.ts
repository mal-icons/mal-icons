import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-restore-from-trash",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtRestoreFromTrash {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 14h-2v4h-4v-4H8v5h8zm0 0V9H8v5l4-4z","opacity":".3"}],["path",{"d":"M6 19c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V7H6v12zm2-5V9h8v10H8v-5zm7.5-10-1-1h-5l-1 1H5v2h14V4zM10 18h4v-4h2l-4-4-4 4h2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtRestoreFromTrash;
