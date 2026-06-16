import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-local-cafe",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtLocalCafe {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 15h6c1.1 0 2-0.9 2-2V5H6v8c0 1.10.9 2 2 2z","opacity":".3"}],["path",{"d":"M2 19h18v2H2zm2-6c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-0.89 2-2V5c0-1.11-0.89-2-2-2H4v10zm14-8h2v3h-2V5zM6 5h10v8c0 1.1-0.9 2-2 2H8c-1.1 0-2-0.9-2-2V5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtLocalCafe;
