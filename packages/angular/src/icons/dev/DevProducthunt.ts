import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-producthunt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevProducthunt {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"fill-rule":"evenodd","clip-path":"url(#devicon-producthunt-2-a)","clip-rule":"evenodd"}],["path",{"fill":"currentColor","d":"M300 600a300 300 0 1 0 0-600 300 300 0 0 0 0 600"}],["path",{"fill":"currentColor","d":"M225 180v240h45v-75h68.1a83.6 83.6 0 0 0 81.9-82.5 82 82 0 0 0-81.9-82.5zm113.7 120H270v-75h68.7a37 37 0 0 1 36.3 37.5 37 37 0 0 1-36.3 37.5"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevProducthunt;
