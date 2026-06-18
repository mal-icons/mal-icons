import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-horse",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbHorse {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 10l-0.85 8.51a1.36 1.36 0 0 0 1.35 1.49h0.15a2 2 0 0 0 1.86 -1.26l0.99 -2.49a2 2 0 0 1 1.86 -1.26h1.29a2 2 0 0 1 1.86 1.26l0.99 2.49a2 2 0 0 0 1.86 1.26h0.15a1.37 1.37 0 0 0 1.36 -1.49l-0.86 -9.51h-8c0 -3 -3 -5 -6 -5l-3 6l2 2l3 -2"}],["path",{"d":"M22 14v-2a3 3 0 0 0 -3 -3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbHorse;
