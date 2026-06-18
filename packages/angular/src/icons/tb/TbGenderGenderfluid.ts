import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-gender-genderfluid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbGenderGenderfluid {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10 15.46a4 4 0 1 0 4 -6.93a4 4 0 0 0 -4 6.93"}],["path",{"d":"M15.46 14l3 -5.2"}],["path",{"d":"M5.54 15.2l3 -5.2"}],["path",{"d":"M12 12h0.01"}],["path",{"d":"M9 9l-6 -6"}],["path",{"d":"M5.5 8.5l3 -3"}],["path",{"d":"M21 21l-6 -6"}],["path",{"d":"M17 20l3 -3"}],["path",{"d":"M3 7v-4h4"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbGenderGenderfluid;
