import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-netease-music",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandNeteaseMusic {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M9 4c-2.93 1.35 -5 5.05 -5 8.49c0 4.51 4 7.51 8 7.51c4 0 8 -3 8 -7c0 -3.51 -3.5 -5.51 -6 -5.51c-2.5 0 -5 1.51 -5 4.51c0 2 1.5 3 3 3c1.5 0 3 -1 3 -3c0 -3.51 -2 -4.51 -2 -6.51c0 -3.5 3.5 -2.6 4 -1.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandNeteaseMusic;
