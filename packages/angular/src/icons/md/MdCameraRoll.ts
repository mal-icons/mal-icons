import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-camera-roll",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdCameraRoll {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 5c0-1.1-0.9-2-2-2h-1V2c0-0.55-0.45-1-1-1H6c-0.55 0-1 0.45-1 1v1H4c-1.1 0-2 0.9-2 2v15c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2h8V5h-8zm6 13h-8v2H4V5h3V3h2v2h3v2h8v11zM9 15h2v2H9zm0-7h2v2H9zm4 7h2v2h-2zm0-7h2v2h-2zm4 7h2v2h-2zm0-7h2v2h-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdCameraRoll;
