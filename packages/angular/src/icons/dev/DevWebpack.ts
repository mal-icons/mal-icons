import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-webpack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevWebpack {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m300 0 265.1 150v300L300 600 34.9 450V150z"}],["path",{"fill":"currentColor","d":"M517.8 439.6 308.8 558v-92l130.3-71.8zm14.3-12.9V179.4l-76.4 44.1v159zm-450.7 13 209 118.2v-92L160 394.1zm-14.3-13V179.4l76.4 44.1v159zM76 163.4 290.4 42v89L153 206.8l-1 0.6zm447.1 0L308.8 42v89l137.3 75.7 1 0.6z"}],["path",{"fill":"currentColor","d":"m290.4 445-128.5-70.8v-140l128.5 74.2zm18.4 0 128.5-70.7v-140l-128.5 74zM170.5 218l129.1-71 129 71-129 74.4z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevWebpack;
