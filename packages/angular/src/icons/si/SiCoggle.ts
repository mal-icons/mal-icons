import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-coggle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiCoggle {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.68 0A3.68 3.68 0 0 0 0 3.68v10.92c2.05-0.53 3.61-1.58 5.16-3.13h7.37v7.37c-1.88 1.88-5.44 4.6-8.05 5.16h15.84A3.68 3.68 0 0 0 24 20.32V8.88c-1.540.54-3.09 1.58-4.63 3.12l-4.74 4.74V9.37H7.27l3.68-3.68c2.35-2.35 5.96-5.12 8.58-5.68H3.68z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiCoggle;
