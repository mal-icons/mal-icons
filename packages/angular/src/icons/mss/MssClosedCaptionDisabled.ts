import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-closed-caption-disabled",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssClosedCaptionDisabled {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m361-599 50 50H290v138h102v-22h50v72H240v-238h121ZM246-800h594v594l-60-60v-474H306l-60-60Zm475 367v72h-36l-50-50h36v-22h50Zm-50-94v-22H569v72l-50-50v-72h202v72h-50Zm-128 24Zm-126 46ZM163-797l57 57h-40v520h474L26-848l43-43L876-84l-43 43-119-119H120v-637h43Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssClosedCaptionDisabled;
