import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tb-live-photo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TbLivePhoto {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M15.9 20.11l0 0.01"}],["path",{"d":"M19.04 17.61l0 0.01"}],["path",{"d":"M20.77 14l0 0.01"}],["path",{"d":"M20.77 10l0 0.01"}],["path",{"d":"M19.04 6.39l0 0.01"}],["path",{"d":"M15.9 3.89l0 0.01"}],["path",{"d":"M12 3l0 0.01"}],["path",{"d":"M8.1 3.89l0 0.01"}],["path",{"d":"M4.96 6.39l0 0.01"}],["path",{"d":"M3.23 10l0 0.01"}],["path",{"d":"M3.23 14l0 0.01"}],["path",{"d":"M4.96 17.61l0 0.01"}],["path",{"d":"M8.1 20.11l0 0.01"}],["path",{"d":"M12 21l0 0.01"}]];
  readonly defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TbLivePhoto;
