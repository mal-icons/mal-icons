import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-app-shortcut",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsAppShortcut {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 18H7V6h10v1h2V1H5v22h14v-6h-2zm3.38-8.38L21 11l0.62-1.38L23 9l-1.38-0.62L21 7l-0.62 1.38L19 9z"}],["path",{"d":"m16 8-1.25 2.75L12 12l2.75 1.25L16 16l1.25-2.75L20 12l-2.75-1.25zm5 5-0.62 1.38L19 15l1.380.62L21 17l0.62-1.38L23 15l-1.38-0.62z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsAppShortcut;
