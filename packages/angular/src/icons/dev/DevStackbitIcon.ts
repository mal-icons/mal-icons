import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-stackbit-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevStackbitIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-stackbit-icon-1-a)"}],["path",{"fill":"currentColor","d":"m415.4 184.6 143.8 72.6a74 74 0 0 1 40.5 60l0.3 5.9v166.1a111 111 0 0 1-104.5 110.6l-6.30.2H0.4l184.4-184.6h230.6zM599.6 0 415.4 184.6H184.8v230.8L40.6 343A74 74 0 0 1 0.3 282.9L0 277V111A111 111 0 0 1 103.50.1l7.3-0.2z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevStackbitIcon;
