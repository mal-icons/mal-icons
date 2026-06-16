import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-iron",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtIron {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 16H4v-1c0-1.10.9-2 2-2h9v3z","opacity":".3"}],["path",{"d":"M21 6c-1.66 0-3 1.34-3 3v4c0 0.55-0.45 1-1 1v-4c0-1.66-1.34-3-3-3h-4c-1.66 0-3 1.34-3 3h2c0-0.550.45-1 1-1h4c0.55 0 1 0.45 1 1v1H6c-2.21 0-4 1.79-4 4v3h15v-2c1.66 0 3-1.34 3-3V9c0-0.550.45-1 1-1h1V6h-1zm-6 10H4v-1c0-1.10.9-2 2-2h9v3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtIron;
