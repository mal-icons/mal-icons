import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-blind",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBlind {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["circle",{"cx":"11.5","cy":"3.5","r":"2"}],["path",{"d":"M12.13 7.12c-0.17-0.35-0.44-0.65-0.8-0.85a1.98 1.98 0 0 0-1.93-0.03v-0.01L4 9.3V14h2v-3.54l1.5-0.85C7.18 10.71 7 11.85 7 13v5.33L4.4 21.8 6 23l3-4 0.22-3.54L11 18v5h2v-6.5l-1.97-2.81c-0.04-0.52-0.14-1.760.45-3.40.75 1.14 1.88 1.98 3.2 2.41L20.63 23l0.87-0.5-5.48-9.5H17v-2c-0.49 0-2.880.17-4.08-2.21"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBlind;
