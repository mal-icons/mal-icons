import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-single-bed",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSingleBed {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256-200h-30.3L206-280h-46v-214q0-25.9 17-43.95Q194-556 220-556h26v-144q0-24.75 17.63-42.37T306-760h347q24.75 0 42.38 17.63T713-700v144h27q24.75 0 42.38 17.63T800-496v216h-46l-19.78 80h-30.43L684-280H277l-21 80Zm254-356h143v-144H510v144Zm-204 0h144v-144H306v144Zm-86 216h520v-156H220v156Zm520 0H220h520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSingleBed;
