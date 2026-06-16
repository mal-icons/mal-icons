import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-card-travel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtCardTravel {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 17h16v2H4zm13-7h-2V8H9v2H7V8H4v6h16V8h-3z","opacity":".3"}],["path",{"d":"M20 6h-3V4c0-1.11-0.89-2-2-2H9c-1.11 0-2 0.89-2 2v2H4c-1.11 0-2 0.89-2 2v11c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V8c0-1.11-0.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtCardTravel;
