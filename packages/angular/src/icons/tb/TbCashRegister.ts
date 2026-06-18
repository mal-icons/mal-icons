import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-cash-register",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCashRegister {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 15h-2.5c-0.4 0 -0.78 0.16 -1.06 0.44c-0.28 0.28 -0.44 0.66 -0.44 1.06c0 0.4 0.16 0.78 0.44 1.06c0.28 0.28 0.66 0.44 1.06 0.44h1c0.4 0 0.78 0.16 1.06 0.44c0.28 0.28 0.44 0.66 0.44 1.06c0 0.4 -0.16 0.78 -0.44 1.06c-0.28 0.28 -0.66 0.44 -1.06 0.44h-2.5"}],["path",{"d":"M19 21v1m0 -8v1"}],["path",{"d":"M13 21h-7c-0.53 0 -1.04 -0.21 -1.41 -0.59c-0.37 -0.37 -0.59 -0.88 -0.59 -1.41v-10c0 -0.53 0.21 -1.04 0.59 -1.41c0.38 -0.37 0.88 -0.59 1.41 -0.59h2m12 3.12v-1.12c0 -0.53 -0.21 -1.04 -0.59 -1.41c-0.37 -0.37 -0.88 -0.59 -1.41 -0.59h-2"}],["path",{"d":"M16 10v-6c0 -0.53 -0.21 -1.04 -0.59 -1.41c-0.37 -0.37 -0.88 -0.59 -1.41 -0.59h-4c-0.53 0 -1.04 0.21 -1.41 0.59c-0.37 0.38 -0.59 0.88 -0.59 1.41v6m8 0h-8m8 0h1m-9 0h-1"}],["path",{"d":"M8 14v0.01"}],["path",{"d":"M8 17v0.01"}],["path",{"d":"M12 13.99v0.01"}],["path",{"d":"M12 17v0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCashRegister;
