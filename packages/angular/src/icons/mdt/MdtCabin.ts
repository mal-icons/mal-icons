import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-cabin",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCabin {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.94 7h-3.89L12 5.52 13.94 7zm-6.5 2h9.12L18 10.1v0.9H6v-0.9L7.44 9zM18 13v2H6v-2h12zM6 19v-2h12v2H6z","opacity":".3"}],["path",{"d":"M10 1c0 1.66-1.34 3-3 3-0.55 0-1 0.45-1 1H4c0-1.66 1.34-3 3-3 0.55 0 1-0.45 1-1h2zm2 2L6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm1.94 4h-3.89L12 5.52 13.94 7zm-6.5 2h9.12L18 10.1v0.9H6v-0.9L7.44 9zM18 13v2H6v-2h12zM6 19v-2h12v2H6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCabin;
