import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-php",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandPhp {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2 12a10 9 0 1 0 20 0a10 9 0 1 0 -20 0"}],["path",{"d":"M5.5 15l0.4 -1.97l0.61 -3.03h1.32a1 1 0 0 1 0.99 1.16l-0.17 1a1 1 0 0 1 -0.99 0.84h-1.65"}],["path",{"d":"M15.5 15l0.4 -1.97l0.61 -3.03h1.32a1 1 0 0 1 0.99 1.16l-0.17 1a1 1 0 0 1 -0.99 0.84h-1.65"}],["path",{"d":"M12 7.5l-1 5.5"}],["path",{"d":"M11.6 10h2.4l-0.5 3"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandPhp;
