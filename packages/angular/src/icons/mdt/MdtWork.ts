import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-work",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtWork {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 8h16v11H4z","opacity":".3"}],["path",{"d":"M20 6h-4V4c0-1.11-0.89-2-2-2h-4c-1.11 0-2 0.89-2 2v2H4c-1.11 0-1.990.89-1.99 2L2 19c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V8c0-1.11-0.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtWork;
