import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-verdaccio-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevVerdaccioIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M510 227.1 347.1 553H253L0 47h162.9L300 321.4l47.1-94.3z"}],["path",{"fill":"currentColor","d":"M300 167.1v-25.7h90l12.8-25.7h-60V90h73l8.5-17.2h-38.6V47.2H600l-60 120z"}],["path",{"fill":"currentColor","d":"m147 72.9 205.4 412.3-21.1 42h-62.6L41.6 72.8z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevVerdaccioIcon;
