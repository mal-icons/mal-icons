import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-local-atm",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfLocalAtm {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 17h2v-1h1c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h3v1H9v2h2v1zm9-13H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6c0-1.11-0.89-2-2-2zm0 14H4V6h16v12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfLocalAtm;
