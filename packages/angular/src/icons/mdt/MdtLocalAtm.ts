import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-local-atm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtLocalAtm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 18h16V6H4v12zm5-4h4v-1h-3c-0.55 0-1-0.45-1-1V9c0-0.550.45-1 1-1h1V7h2v1h2v2h-4v1h3c0.55 0 1 0.45 1 1v3c0 0.55-0.45 1-1 1h-1v1h-2v-1H9v-2z","opacity":".3"}],["path",{"d":"M20 4H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6c0-1.11-0.89-2-2-2zm0 14H4V6h16v12zm-9-1h2v-1h1c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h3v1H9v2h2v1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtLocalAtm;
