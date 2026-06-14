import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-teamgrid",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevTeamgrid {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m0 431.6 62.7-50.7V219.1L0 179.9zm102-301.7v338.4l70.2-59.2V190.6zm109-20.6v381.4l70.3-72V180.2zM537.4 219v161.8l62.7 50.7V179.9zM498 129.9v338.4L427.8 409V190.6zm-109-20.6-70.3 71v238.4l70.2 72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevTeamgrid;
