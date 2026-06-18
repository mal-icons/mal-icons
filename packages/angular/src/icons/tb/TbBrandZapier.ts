import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-brand-zapier",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbBrandZapier {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 12h6"}],["path",{"d":"M21 12h-6"}],["path",{"d":"M12 3v6"}],["path",{"d":"M12 15v6"}],["path",{"d":"M5.64 5.64l4.24 4.24"}],["path",{"d":"M18.36 18.36l-4.24 -4.24"}],["path",{"d":"M18.36 5.64l-4.24 4.24"}],["path",{"d":"M9.88 14.12l-4.24 4.24"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbBrandZapier;
