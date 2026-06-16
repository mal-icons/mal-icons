import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-flare",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFlare {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.64 7.05 7.05 5.65l2.12 2.12-1.41 1.41zM11 1h2v6h-2zm5.24 13.83 2.12 2.12-1.41 1.41-2.12-2.12zM14.83 7.76l2.12-2.12 1.41 1.41-2.12 2.12zm-5.67 8.48-2.12 2.12-1.41-1.41 2.12-2.12zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-1 8h2v6h-2zM1 11h6v2H1zm16 0h6v2h-6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFlare;
