import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-kako-talk",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandKakoTalk {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 8v7"}],["path",{"d":"M14 10l-2 2.5l2 2.5"}],["path",{"d":"M12 4c4.97 0 9 3.36 9 7.5c0 4.14 -4.03 7.5 -9 7.5c-0.67 0 -1.32 -0.06 -1.95 -0.18l-3.05 2.18l0.59 -2.96c-2.74 -1.28 -4.59 -3.73 -4.59 -6.54c0 -4.14 4.03 -7.5 9 -7.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandKakoTalk;
