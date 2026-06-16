import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-arrow-downward",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrArrowDownward {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-172q-5 0-10.6-2.04-5.6-2.05-10.4-6.95L181-459q-9-8.8-9-20.9 0-12.1 9-21.1 9-9 21-9t21 9l227 227v-496q0-13.08 8.68-21.54 8.68-8.46 21.5-8.46 12.83 0 21.33 8.63T510-770v496l227-227q9-9 21-9t21 8.84q9 8.84 9 21T779-459L501-181q-5 5-10.09 7-5.09 2-10.91 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrArrowDownward;
