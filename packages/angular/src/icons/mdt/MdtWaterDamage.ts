import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-water-damage",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtWaterDamage {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12 5.69-5 4.5V18h10v-7.81l-5-4.5zM12 16c-1.1 0-2-0.9-2-2s2-4 2-4 2 2.9 2 4-0.9 2-2 2z","opacity":".3"}],["path",{"d":"M12 3 2 12h3v8h14v-8h3L12 3zM7 18v-7.81l5-4.5 5 4.5V18H7zm7-4c0 1.1-0.9 2-2 2s-2-0.9-2-2 2-4 2-4 2 2.9 2 4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtWaterDamage;
