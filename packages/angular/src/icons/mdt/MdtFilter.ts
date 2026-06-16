import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-filter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtFilter {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 17h14V3H7v14zm4.25-5.53 1.96 2.36 2.75-3.54L19.5 15h-11l2.75-3.53z","opacity":".3"}],["path",{"d":"M1 21c0 1.10.9 2 2 2h16v-2H3V5H1v16zM21 1H7c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V3c0-1.1-0.9-2-2-2zm0 16H7V3h14v14zm-5.04-6.71-2.75 3.54-1.96-2.36L8.5 15h11z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtFilter;
