import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-atomic-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevAtomicIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-atomic-icon-1-a)"}],["path",{"fill":"currentColor","d":"M416.4 570H82a82 82 0 1 1 0-163.9h189.5c31.2-0.1 60 16.5 75.5 43.6z"}],["path",{"fill":"currentColor","d":"M62 360 229.4 70.2a82 82 0 1 1 142 82l-94.7 164.1a87 87 0 0 1-75.5 43.6z"}],["path",{"fill":"currentColor","d":"M421.8 158.1 589 447.8a82 82 0 1 1-142 82l-94.8-164.1a87 87 0 0 1 0-87.3z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevAtomicIcon;
