import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-align-bottom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsAlignBottom {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["rect",{"width":"4","height":"12","x":"6","y":"1","rx":"1"}],["path",{"d":"M1.5 14a0.50.5 0 0 0 0 1zm13 1a0.50.5 0 0 0 0-1zm-13 0h13v-1h-13z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsAlignBottom;
