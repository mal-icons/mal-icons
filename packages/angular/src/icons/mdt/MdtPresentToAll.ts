import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-present-to-all",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtPresentToAll {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 19.02h18V4.98H3v14.04zM12 8l4 4h-2v4h-4v-4H8l4-4z","opacity":".3"}],["path",{"d":"M10 16h4v-4h2l-4-4-4 4h2zM21 3H3c-1.11 0-2 0.89-2 2v14c0 1.110.89 2 2 2h18c1.11 0 2-0.89 2-2V5c0-1.11-0.89-2-2-2zm0 16.02H3V4.98h18v14.04z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtPresentToAll;
