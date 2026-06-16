import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-hardware",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtHardware {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.77 6H11v5h2V5H9c-0.89 0-1.680.39-2.23 1zM11 13h2v6h-2z","opacity":".3"}],["path",{"d":"m18 3-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 0.550.45 1 1 1h4c0.55 0 1-0.45 1-1V8l3 3h2V3h-2zm-5 16h-2v-6h2v6zm0-8h-2V6H6.77C7.32 5.39 8.11 5 9 5h4v6z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtHardware;
