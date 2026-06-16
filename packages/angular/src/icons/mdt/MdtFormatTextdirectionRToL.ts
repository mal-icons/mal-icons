import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-format-textdirection-r-to-l",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFormatTextdirectionRToL {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 6c0 1.10.9 2 2 2V4c-1.1 0-2 0.9-2 2z","opacity":".3"}],["path",{"d":"M6 6c0 2.21 1.79 4 4 4v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6zm4 2c-1.1 0-2-0.9-2-2s0.9-2 2-2v4zM4 18l4 4v-3h12v-2H8v-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFormatTextdirectionRToL;
