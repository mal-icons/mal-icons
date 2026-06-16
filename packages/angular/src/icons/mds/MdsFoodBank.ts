import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-food-bank",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsFoodBank {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3 4 9v12h16V9l-8-6zm0.5 9.5c0 0.83-0.67 1.5-1.5 1.5v4h-1v-4c-0.83 0-1.5-0.67-1.5-1.5v-3h1v3h0.5v-3h1v3h0.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.10.9-2 2-2V18z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsFoodBank;
