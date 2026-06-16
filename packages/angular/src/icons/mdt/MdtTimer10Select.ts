import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-timer-10-select",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtTimer10Select {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 8v8h-3V8h3m0-3h-3C8.34 5 7 6.34 7 8v8c0 1.66 1.34 3 3 3h3c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3zM1 8h2v11h3V5H1v3zm17.5 3c-0.83 0-1.50.68-1.5 1.5v2c0 0.820.67 1.5 1.5 1.5H21v1h-4v2h4.5c0.83 0 1.5-0.67 1.5-1.5v-2c0-0.83-0.67-1.5-1.5-1.5H19v-1h4v-2h-4.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtTimer10Select;
