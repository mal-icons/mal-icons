import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-sameroom",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevSameroom {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-sameroom-1-a)"}],["path",{"fill":"currentColor","d":"M567.2 0H32.8A33 33 0 0 0 0 32.8v534.4A33 33 0 0 0 32.8 600h534.4a33 33 0 0 0 32.8-32.8V32.8A33 33 0 0 0 567.2 0"}],["path",{"fill":"currentColor","d":"M188.5 268.3a79.9 79.9 0 1 1-159.8 0 79.9 79.9 0 0 1 159.8 0"}],["path",{"fill":"currentColor","d":"M153.7 268.3a45 45 0 1 1-90.1 0 45 45 0 0 1 90 0"}],["path",{"fill":"currentColor","d":"M574.6 268.3a79.9 79.9 0 1 1-159.8 0 79.9 79.9 0 0 1 159.8 0"}],["path",{"fill":"currentColor","d":"M539.8 268.3a45 45 0 1 1-90.1 0 45 45 0 0 1 90 0"}],["path",{"fill":"currentColor","d":"M299.8 491c-42 0-89.2-12.5-136.2-50.2A20.3 20.3 0 0 1 189 409c113.6 91.1 226.3 4.9 231 1.2a20.3 20.3 0 0 1 25.2 31.8c-1 0.8-63.1 48.9-145.4 48.9"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevSameroom;
