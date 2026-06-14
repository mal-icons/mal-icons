import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ti-coffee",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TiCoffee {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M17 19h-12c-0.55 0-1-0.45-1-1s0.45-1 1-1h12c0.55 0 1 0.45 1 1s-0.45 1-1 1zM17.5 5h-12.5v9c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2v-2h0.5c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5zm-2.5 9h-8v-7h8v7zm2.5-4h-1.5v-3h1.5c0.83 0 1.50.67 1.5 1.5s-0.67 1.5-1.5 1.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TiCoffee;
