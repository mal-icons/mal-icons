import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-king-bed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtKingBed {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 12h16v3H4z","opacity":".3"}],["path",{"d":"M20 10V7c0-1.1-0.9-2-2-2H6c-1.1 0-2 0.9-2 2v3c-1.1 0-2 0.9-2 2v5h1.33L4 19h1l0.67-2h12.67l0.66 2h1l0.67-2H22v-5c0-1.1-0.9-2-2-2zm-7-3h5v3h-5V7zM6 7h5v3H6V7zm14 8H4v-3h16v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtKingBed;
