import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-deezer",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandDeezer {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 16.5h2v0.5h-2l0 -0.5"}],["path",{"d":"M8 16.5h2.5v0.5h-2.5l0 -0.5"}],["path",{"d":"M16 17h-2.5v-0.5h2.5l0 0.5"}],["path",{"d":"M21.5 17h-2.5v-0.5h2.5l0 0.5"}],["path",{"d":"M21.5 13h-2.5v0.5h2.5l0 -0.5"}],["path",{"d":"M21.5 9.5h-2.5v0.5h2.5l0 -0.5"}],["path",{"d":"M21.5 6h-2.5v0.5h2.5l0 -0.5"}],["path",{"d":"M16 13h-2.5v0.5h2.5l0 -0.5"}],["path",{"d":"M8 13.5h2.5v-0.5h-2.5l0 0.5"}],["path",{"d":"M8 9.5h2.5v0.5h-2.5l0 -0.5"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandDeezer;
