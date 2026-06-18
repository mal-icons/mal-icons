import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-matrix",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbMatrix {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M8 16h0.01"}],["path",{"d":"M12.01 16h0.01"}],["path",{"d":"M16.02 16h0.01"}],["path",{"d":"M16.02 12h0.01"}],["path",{"d":"M8.01 12h0.01"}],["path",{"d":"M12.01 12h0.01"}],["path",{"d":"M16.02 8h0.01"}],["path",{"d":"M8.02 8h0.01"}],["path",{"d":"M12.02 8h0.01"}],["path",{"d":"M7 4h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h1"}],["path",{"d":"M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-1"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbMatrix;
