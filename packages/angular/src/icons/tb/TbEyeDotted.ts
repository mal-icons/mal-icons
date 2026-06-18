import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-eye-dotted",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbEyeDotted {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"}],["path",{"d":"M21 12h0.01"}],["path",{"d":"M3 12h0.01"}],["path",{"d":"M5 15h0.01"}],["path",{"d":"M5 9h0.01"}],["path",{"d":"M19 15h0.01"}],["path",{"d":"M12 18h0.01"}],["path",{"d":"M12 6h0.01"}],["path",{"d":"M8 17h0.01"}],["path",{"d":"M8 7h0.01"}],["path",{"d":"M16 17h0.01"}],["path",{"d":"M16 7h0.01"}],["path",{"d":"M19 9h0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbEyeDotted;
