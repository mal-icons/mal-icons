import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-copy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCopy {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7 9.67a2.67 2.67 0 0 1 2.67 -2.67h8.67a2.67 2.67 0 0 1 2.67 2.67v8.67a2.67 2.67 0 0 1 -2.67 2.67h-8.67a2.67 2.67 0 0 1 -2.67 -2.67l0 -8.67"}],["path",{"d":"M4.01 16.74a2.01 2.01 0 0 1 -1.01 -1.74v-10c0 -1.1 0.9 -2 2 -2h10c0.75 0 1.16 0.39 1.5 1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCopy;
