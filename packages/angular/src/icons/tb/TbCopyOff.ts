import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-copy-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbCopyOff {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M19.41 19.42a2 2 0 0 1 -1.41 0.59h-8a2 2 0 0 1 -2 -2v-8c0 -0.55 0.23 -1.05 0.59 -1.42m3.41 -0.58h6a2 2 0 0 1 2 2v6"}],["path",{"d":"M16 8v-2a2 2 0 0 0 -2 -2h-6m-3.42 0.59c-0.36 0.36 -0.58 0.86 -0.58 1.41v8a2 2 0 0 0 2 2h2"}],["path",{"d":"M3 3l18 18"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbCopyOff;
