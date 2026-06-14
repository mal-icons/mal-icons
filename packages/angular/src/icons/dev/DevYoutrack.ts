import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-youtrack",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevYoutrack {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-youtrack-2-a)"}],["path",{"fill":"currentColor","d":"M196 230.5A69956 69956 0 0 0 408.7 35.8q7.5-7.5 15.9-14a109.9 109.9 0 0 1 143 165.9c-22 22-106.4 111.5-106.4 111.5S571.8 405.6 573.6 407a70 70 0 0 1 16.4 91 72 72 0 0 1-49.2 33.7c-6 1-86.5-76.3-175.3-139-56.2 63-167.9 188.3-168.2 188.3-47.5 33.2-105.5 14.9-131.70.5a132.3 132.3 0 0 1-22-212.4c15.4-14 81-73.5 152.3-138.7"}],["path",{"fill":"currentColor","d":"M393.3 262.8a85 85 0 0 0-32.5-55.3L188 32.6A110.1 110.1 0 1 0 45.2 199.4L253.8 345a87 87 0 0 0 139.5-82.2"}],["path",{"fill":"currentColor","d":"M485.7 114.6H112.2v373.6h373.5z"}],["path",{"fill":"currentColor","d":"M150 412.5h136.8v24.8H150zm50-149.9-63-99h42l39.2 65.9 39.6-65.9h41l-63 98.6v65.3h-36v-64.9zm154-65.8h-50v-33.2h135.5v33.2H390v130.3h-36z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevYoutrack;
