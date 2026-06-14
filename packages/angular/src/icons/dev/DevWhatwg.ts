import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-whatwg",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevWhatwg {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-whatwg-1-a)"}],["path",{"fill":"currentColor","d":"M300 570a270 270 0 1 0 0-540 270 270 0 0 0 0 540"}],["path",{"fill":"currentColor","d":"M300 600a300 300 0 1 0 0-600 300 300 0 0 0 0 600m0-60a240 240 0 1 1 0-480 240 240 0 0 1 0 480"}],["path",{"fill":"currentColor","d":"M228 228c0-72 144-90 138-12 0 54-96 78-96 138v42h60v-24c0-54 102-72 102-162-12-132-270-132-270 18zm42 192h60v60h-60z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevWhatwg;
