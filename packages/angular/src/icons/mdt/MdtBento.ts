import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-bento",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBento {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 17h8V7H4v10zm4-6.5c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5zm6 2.5h6v4h-6v-4zm6-6v4h-6V7h6z","opacity":".3"}],["path",{"d":"M20 5H4c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V7c0-1.1-0.9-2-2-2zm0 6h-6V7h6v4zM4 7h8v10H4V7zm10 10v-4h6v4h-6zm-4.5-5c0 0.83-0.67 1.5-1.5 1.5s-1.5-0.67-1.5-1.50.67-1.5 1.5-1.5 1.50.67 1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBento;
